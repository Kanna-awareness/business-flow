import React from 'react';
import './css/App.css';
import Topbar from './utils/bootstrap/Topbar';
import ProcessMapNew from './component/ProcessMapNew';
import ProcessMapEdit from './component/ProcessMapEdit';
import ProcessMapView from './component/ProcessMapView';
import ProcessList from './component/ProcessList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
        <div id="wrapper">
            <BrowserRouter>
                <div id="content-wrapper" className="d-flex flex-column">
                    <Topbar/>
                    <div id="content">
                        <div className="container-fluid">
                                <Routes>
                                    <Route index path="/" element={<ProcessList />} />
                                    <Route path="/processmap-new" element={<ProcessMapNew/>} />
                                    <Route path="/processmap-edit" element={<ProcessMapEdit/>} />
                                    <Route path="/processmap-view" element={<ProcessMapView/>} />
                                </Routes>
                            
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    </React.Fragment>
)

}

export default App;
