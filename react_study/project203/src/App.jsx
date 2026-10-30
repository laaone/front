
import './App.css';
import { useReducer, useRef, useCallback } from 'react';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import TestComp from './component/TestComp';

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
const reducer = (state,action)=>{
      switch ( action.type ){
        case "CREATE": { return [ action.newItem, ...state]}
        case "UPDATE": { return state.map( (it) => it.id === action.targetId ? { ...it, idDone: !it.idDone,} :it )}
        case "DELETE": { return state.filter( (it)=> it.id !== action.targetId  )}
        default: return state;
      }
     
}


function App() {
  const idRef = useRef(3);
    
  const [todo, dispatch ] = useReducer( reducer, mockTodo );
  //const [todo, setTodo] = useState( mockTodo );
  
  const onCreate =(content) => {
                 dispatch( { type: "CREATE",
                           newItem: {
                               id: idRef.current,
                               content,
                               idDone: false,
                               createdDate: new Date().getTime(),
                           },
                          });             
                                idRef.current += 1;
                              }
  const onUpdate = useCallback( ( targetId )=> {
                            dispatch( { type: "UPDATE", targetId, });
                           }, [] );
                           
  const onDelete = useCallback( ( targetId )=> { 
                            dispatch( { type:"DELETE", targetId,})
                           
                                     }, [] );
  return (
    <>
    <div className= 'App'>
      <TestComp/>
      <Header/>
      <TodoEditor onCreate={ onCreate } />
      <TodoList todo={ todo} onUpdate = {onUpdate} onDelete={onDelete} />
      </div>  
    </>
  );
}

export default App;
