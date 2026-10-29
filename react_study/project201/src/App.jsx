
import './App.css';
import { useState, useRef } from 'react';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
// import TodoItem from './component/TodoItem'

const mockTodo = [
  {
    id: 0,
    idDone: false,
    content: "공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    idDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    idDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
]


function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState( mockTodo );
  
  const onCreate =(content) => {
    const newItem = {
                      id: idRef.current,
                      content,
                      isDone: false,
                      createdDate: new Date().getTime(),  
                      }
                      setTodo([newItem,...todo]);
                      idRef.current += 1;
                    }
  const onUpdate = ( targetId )=> {
     
       setTodo( todo.map( (it) =>  it.id === targetId  ?  { ...it, idDone: !it.idDone } : it ));

  }
  const onDelete = ( targetId )=> {
    setTodo( todo.filter( (it) => it.id !== targetId ));

  }
  return (
    <>
    <div className= 'App'>
      <Header/>
      <TodoEditor onCreate={ onCreate } />
      <TodoList todo={ todo} onUpdate = {onUpdate} onDelete={onDelete} />
      </div>  
    </>
  )
}

export default App
