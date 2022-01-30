import React, { useState } from "react";
import processmapList from "../utils/processmapList";
import {Link} from 'react-router-dom';

function ProcessList() {


  return (
    <div className="ProcessList">
      <div className="row">
        <div className="col-lg-3 mb-4">
          <div className="card bg-danger text-white shadow">
            <div className="card-body">
              <Link to="/processmap-new"><b className="text-white">Add new process map</b></Link>
              <div className="text-white small">&nbsp;</div>
              <div className="text-white small">&nbsp;</div>
            </div>
          </div>
        </div>
        {
          processmapList.map((v) => {
            return (
              <div className="col-lg-3 mb-4" key={v.id}>
                <div className="card bg-info text-white shadow">
                  <div className="card-body">
                    <Link to="/processmap-view"><b className="text-white">{v.name}</b></Link>
                    <div className="text-white small">Created by: {v.createdBy}</div>
                    <div className="text-white small">Created date: {v.createdDate}</div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
export default ProcessList;
