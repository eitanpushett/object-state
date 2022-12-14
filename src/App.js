import './App.css';
import { useState } from 'react';


function App() {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState(['Buy Milk', 'Go to a movie', 'Pick up Anaelle', 'Sleep','Eat'])



  function handleToDoChange(e){
    setToDo(e.target.value)
  }

    function AddItem(List){
      setToDoList(toDoList.push(toDo))
    }




  return (
    <div className="App">
      <input value={toDo} onChange = {handleToDoChange}/>
      <button onClick={AddItem}>Add to list</button>
      <h3>To Do List:</h3>
      <ul>
        {toDoList.map(
          toDo => (
            <li>{toDo}</li>
          )
        )
          
        }
      </ul>
    </div>
  );
}

export default App;
