import React, { useState } from "react";
import processmapList from "../utils/processmapList";
import {Link} from 'react-router-dom';

function ProcessList() {


  return (
    <div className="ProcessList">
      <div class="row">
        {
          processmapList.map((v) => {
            return (
              <div class="col-lg-3 mb-4">
                <div class="card bg-info text-white shadow">
                  <div class="card-body">
                    <Link to="/processmap"><b class="text-white">{v.name}</b></Link>
                    <div class="text-white small">Created by: {v.createdBy}</div>
                    <div class="text-white small">Created date: {v.createdDate}</div>
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
