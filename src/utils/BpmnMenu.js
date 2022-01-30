import React, {useState} from 'react';
import '../css/bpmnMenu.css'
import {Link} from 'react-router-dom';

function BpmnMenu(props) {
    const [name, setName] = useState(props.name);
    const handleError = (event) => {
        setName(event.target.value);
    }

    return (
        <div
            className="bpmnMenu"
            style={{width: "98vw"}}
        >
            <div className="leftMenu">
                {
                    props.editible 
                    ? <input className="processName" type="text" value={name} placeholder="Enter process map name here..." onChange={handleError} />
                    : <span className="processName nonEdit">Pizza order</span>
                }
            </div>
            <div className="rightMenu">
                {
                    props.editible 
                    ? <Link to="/processmap-view"><button className="bpmnButton" onClick={() => {}}>Save</button></Link>
                    : <Link to="/processmap-edit"><button className="bpmnButton" onClick={() => {}}>Edit</button></Link>
                }
            </div>
        </div>
        
    )     
 }        




    
    


export default BpmnMenu;