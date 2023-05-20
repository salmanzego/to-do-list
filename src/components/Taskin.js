import React from "react";
import './Taskin.css';


const Taskin = (props) => {
    return (
        <div className="taskin">
            <input type="text" placeholder="Enter Task" value={props.Task.text} onChange={props.readTask} />
            <button onClick={props.addTask}>+</button>
        </div>
    )
}

export default Taskin;