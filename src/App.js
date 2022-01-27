import React from 'react';
import './css/App.css';
import Topbar from './utils/bootstrap/Topbar';
import ProcessMap from './component/ProcessMap';

function App() {
  return (
    <React.Fragment>
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <Topbar/>
                <div id="content">
                    <div className="container-fluid">
                        <ProcessMap/>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

}

export default App;
