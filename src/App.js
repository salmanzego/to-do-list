import React from "react";
import { useState, createContext } from "react";
import "./App.css";
import Taskin from "./components/Taskin";
import Tasklist from "./components/Tasklist";

const TaskContext = createContext();

const App = () => {
    const [Tasks, setTasks] = useState([]);
    const [Task, setTask] = useState({ id: Date.now(), text: 'Drink a Coffee', editEnabled: false, active: true });
    const [TempTask, setTempTask] = useState({ id: null, text: '', editEnabled: false, active: true })
    

    const readTask = (e) => {
        TempTask.id ? setTempTask({ id: TempTask.id, text: e.target.value, editEnabled: false, active: true }) : setTask({ id: Date.now(), text: e.target.value, editEnabled: false, active: true });
    }
    const addTask = () => {
        if(Task.text.length !== 0){
            setTasks([...Tasks, Task]); 
            setTask({ id: Date.now(), text: '', editEnabled: false, active: true });
        }else{
            alert("Enter Some Text!");
        }
    }

    const enableEdit = (taskId, editState) => {
        setTasks(
            Tasks.filter((task) => {
                if (task.id === taskId) {
                    task.editEnabled = !task.editEnabled;
                }
                return task;
            })
        );
        if (editState) {
            setTasks(
                Tasks.filter((task) => {
                    if (task.id === TempTask.id) {
                        task.text = TempTask.text;
                        task.editEnabled = TempTask.editEnabled;
                    }
                    return task;
                })
            );
            setTempTask({ id: null, text: '', editEnabled: false, active: true });
        }
        editState ? document.getElementById(taskId).setAttribute("disabled", false) : document.getElementById(taskId).removeAttribute("disabled");
        document.getElementById(taskId).focus();
    }
    const handleTaskActive = (e, taskId) => {
        setTasks(
            Tasks.filter((filtertask) => {
                if (filtertask.id === taskId) {
                    filtertask.active = !e.target.checked;
                }
                return filtertask;
            })
        );

    }

    return (
        <div className="main_section">
            <div className="task_section">

                <Taskin Task={Task} readTask={readTask} addTask={addTask} />
                <TaskContext.Provider value={{TempTask,handleTaskActive,enableEdit,setTempTask,setTasks,readTask}}>
                    <Tasklist Tasks={Tasks} />
                </TaskContext.Provider>
            </div>
        </div>
    );
}

export {App,TaskContext};


