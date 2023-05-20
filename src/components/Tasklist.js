import React from "react";
import Taskbox from "./Taskbox" ; 
import './Tasklist.css'; 

const Tasklist = (props) => {

    const {Tasks} = props
    if (Tasks[0] != null) {
        return (
            <div className="tasks">
                
                {
                    Tasks.map((task) => {
                        return (
                            <Taskbox key={task.id} task={task} Tasks={Tasks} />
                        )
                    })
                }
            </div>
        )
    }else{
        return(
            <div className="tasks">
                <h2>No Tasks</h2>
            </div>
        )
    }
    
}

export default Tasklist