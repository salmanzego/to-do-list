import React, { useContext } from "react";
import {TaskContext} from "../App";
import "./Taskbox.css";

import TrashIcon from '../trash.svg';
import EditIcon from '../edit.svg';
import verifyIcon from '../confirm.svg';

const Taskbox = (props) => {

    const {task,Tasks} = props
    const {TempTask,handleTaskActive,enableEdit,setTempTask,setTasks,readTask} = useContext(TaskContext)
    console.log("taskbox rendered");
    return (
        <div className="task">
            <input type="checkbox" name="taskCheck" id="taskCheck" onChange={(e) => { handleTaskActive(e, task.id); }} />
            <input id={task.id} type="text" value={task.editEnabled ? TempTask.text : task.text} disabled onChange={readTask} style={task.active ? {textDecoration:"none"} : {textDecoration:"line-through"} } />
            <div className="task_actions">
                <button onClick={() => { setTempTask({ id: task.id, text: task.text, editEnabled: false, active: true }); enableEdit(task.id, task.editEnabled); }}><img src={task.editEnabled ? verifyIcon : EditIcon} alt="" /></button>
                <button onClick={() => { setTasks(Tasks.filter((filtertask) => { return filtertask.id !== task.id; })); }}><img src={TrashIcon} alt="dltbtn" /></button>
            </div>
        </div>
    )
}

export default Taskbox;