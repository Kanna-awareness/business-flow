import React from 'react';
import './css/App.css';
import Topbar from './utils/bootstrap/Topbar';
import ProcessMap from './component/ProcessMap';
import ProcessList from './component/ProcessList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <Topbar/>
                <div id="content">
                    <div className="container-fluid">
                        <BrowserRouter>
                            <Routes>
                                <Route index element={<ProcessList />} />
                                <Route path="/processmap" element={<ProcessMap/>} />
                            </Routes>
                        </BrowserRouter>
                        
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

}

export default App;
