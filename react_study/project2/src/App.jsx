
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
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    idDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    idDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime(),
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
                      createDate: new Date().getTime(),  
                      }
                      setTodo([newItem,...todo]);
                      idRef.current += 1;
                    }
 
  return (
    <>
    <div className= 'App'>
      <Header/>
      <TodoEditor onCreate={ onCreate } />
      <TodoList/>
      </div>  
    </>
  )
}

export default App
