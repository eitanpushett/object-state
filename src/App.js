import './App.css';
import { useState } from 'react';


function App() {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState(['Buy Milk', 'Go to a movie', 'Pick up Anaelle', 'Sleep','Eat'])



  function handleToDoChange(e){
    setToDo(e.target.value)
  }

    function AddItem(List){
      //setToDoList(toDoList.push(toDo)) wrong
      setToDoList([...toDoList,toDo])
      console.log(toDoList)
    }

    console.log("-----Example------")
    let A = 'Messi'
    let B = A

    console.log(B)
    B = 'Ronaldo'
    console.log(A)
    console.log(B)

    console.log("-----Arrays------")

    let listA = ['Messi','Mbappe','Ronaldo']
    let listB = listA
    listA.push('Kane')
    listB.push('Modric')
    console.log(listA)
    console.log(listB)



    //Solution for arrays issue (make them act separtly)


    console.log("-----SpreadOperator------")

    let listC = [...listA]
    listC.push('Griezmann')
    console.log(listA)
    console.log(listC)


    //filters
    console.log("-----Filters------")

    let listD = listA.filter(player => player !== 'Ronaldo')
    console.log(listA)
    console.log(listD)






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
