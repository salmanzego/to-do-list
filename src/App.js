import './App.css';
import { useState} from 'react'
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Make yourself Busy 🌝☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, {id:Date.now() ,text:toDo,status:false}]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((tasks) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={
                  (e)=>{
                    console.log(e.target.checked);
                    toDos.filter(obj=>{
                      if(tasks.id===obj.id){
                        obj.status= e.target.checked;
                      }
                      return obj;
                    })
                  }
                } value={tasks.status}  type="checkbox" name="" id="" />
                <p>{tasks.text}</p>
              </div>
              <div className="right">
                <i onClick={
                  ()=>{
                    let newList = toDos.filter((obj)=>obj.id !== tasks.id);
                    setToDos(newList);
                  }
                } className="fas fa-times"></i>
              </div>
            </div>
          )
        })

        }
      </div>
    </div>
  );
}

export default App;
