import { Routes, Route } from "react-router-dom";
import React, {useReducer, useRef, useEffect, useState } from "react";
import './App.css';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3",
    emotionId: 3,
  },
]
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();



function reducer( state, action ){
  switch( action.type ){

    case "INIT": {
      return action.data;
    }
     case "CREATE": {
       const newState = [ action.data, ...state ] ;
       localStorage.setItem("diary", JSON.stringify(newState));
       return newState;
    }
    case "UPDATE": {
      const newState = state.map( (it)=> 
                        String(it.id) === String(action.data.id) ? {...action.data} : it);
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter( (it)=>String(it.id) !== String(action.targetId)  );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;      
    }
    
    
    default: {  return state; }
  }
}

function App() {
  const [data, dispatch ] = useReducer( reducer, [] );
  const idRef = useRef(0);
  const [isDataLoaded, setIsDataLoaded ] = useState(false);

  useEffect(  ()=>{
              const rawData = localStorage.getItem("diary");
               if (!rawData) {
                 setIsDataLoaded(true);
                 return;
               }
               let localData;
               try {
                 localData = JSON.parse(rawData);
               } catch (e) {
                 console.error("저장된 일기 데이터를 읽을 수 없습니다.", e);
                 localData = [];
               }
               if( !Array.isArray(localData) || localData.length === 0 ){
                 setIsDataLoaded(true);
                return;
               }
               localData.sort((a,b) => Number(b.id) - Number(a.id) );
               idRef.current = localData[0].id + 1;
               dispatch( {type: "INIT", data: localData} );
               setIsDataLoaded(true);
              },[]);
  const onCreate = (date, content, emotionId) => {
      dispatch({
         type: "CREATE",
         data: {
                id: idRef.current,
                date: new Date(date).getTime(),
                content,
                emotionId,
               },
         });
    idRef.current += 1;
  }

  const onUpdate = ( targetId, date, content, emotionId )=>{
      dispatch( {
         type: "UPDATE",
         data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotionId,
         }
      });
  }
  const upDelete = (targetId) => {
      dispatch( {
        type: "DELETE",
        targetId,
      })
  }
  if( !isDataLoaded ){
    return <div> 데이터를 불러오는 중입니다 </div>
  }else{
  
  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={ { onCreate,
                                              onUpdate,
                                              upDelete }}>
       <div className="App">
         <Routes> 
           <Route path="/" element = {<Home/>} />
           <Route path="/new"  element={<New/>} />
           <Route path="/diary/:id"  element={<Diary/>} />
           <Route path="/edit/:id"  element={<Edit/>} />
         </Routes>  
       </div>
       </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider> 
    </>
  );
}
}
export default App