import React, { useEffect, useState } from "react";
import Modeler from "bpmn-js/lib/NavigatedViewer";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import '../css/bpmn.css';
import axios from "axios";
import defaultXML from '../utils/bpmnXML/diagram.bpmn';
import BpmnMenu from '../utils/BpmnMenu';

function ProcessMapView() {
  const [diagram, diagramSet] = useState("");
  const container = document.getElementById("container-view");
  useEffect(() => {
    if (diagram.length === 0) {
      axios
        .get(
          defaultXML
        )
        .then((r) => {
          diagramSet(r.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [diagram]);
  
  if (diagram.length > 0 && container && container.children.length === 0) {
    const bpmnSetting = {
      container,
      keyboard: {
        bindTo: document
      }
    };
    const modeler = new Modeler(bpmnSetting);

    modeler
      .importXML(diagram)
      .then(({ warnings }) => {
        if (warnings.length) {
          console.log("Warnings", warnings);
        }

        const canvas = modeler.get("modeling");
        canvas.setColor("CalmCustomerTask", {
          stroke: "green",
          fill: "yellow"
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
    diagramSet('');
  }

  return (
    <div className="processMap">
      <BpmnMenu editible={false} />
      <div
        id="container-view"
        style={{
          border: "1px solid #000000",
          height: "85vh",
          width: "98vw",
          margin: "auto"
        }}
      ></div>
    </div>
  );
}
export default ProcessMapView;
