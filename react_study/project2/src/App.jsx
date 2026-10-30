
import './App.css';
import React, { useMemo, useReducer, useRef, useCallback } from 'react';
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
export const TodoStateContext = React.createContext(); //  1단계 TodoContext를 만든다.
export const TodoDispatchContext = React.createContext();

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

  const memorizedDispatches = useMemo( () =>{
    return{ onCreate, onUpdate, onDelete };
  } , [] );

  return (
    <>
    <div className= 'App'>
      <TestComp/>
      <Header/>
      <TodoStateContext.Provider value={ todo }> 
        {/* {// 2단계 그룹안에 컴포넌트 넣기} */}
        <TodoDispatchContext.Provider value={ memorizedDispatches }>
      <TodoEditor />
      <TodoList  />
      </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      </div>  
    </>
  );
}

export default App
