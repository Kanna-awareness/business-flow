import React from 'react';
import './App.css';
import Sidebar from './utils/bootstrap/Sidebar';
import Topbar from './utils/bootstrap/Topbar';
import ScrollTop from './utils/bootstrap/ScrollTop';

function App() {
  return (
    <React.Fragment>
        <div id="wrapper">
            {/* <Sidebar/> */}
            <div id="content-wrapper" className="d-flex flex-column">
                <Topbar/>
                <div id="content">
                    <div className="container-fluid">
                      process map
                       {/* <ProcessMap/> */}
                    </div>
                </div>
            </div>
        </div>
        <ScrollTop/>
    </React.Fragment>
)

}

export default App;
