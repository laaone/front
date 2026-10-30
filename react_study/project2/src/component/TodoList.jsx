import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useState, useMemo,useContext } from "react";
import { TodoStateContext }from "../App";


const TodoList = () =>{
    const todo = useContext( TodoStateContext );
    

    const [ search, setSearch ] = useState("");
    const onChangeSearch = (e) => {
        setSearch( e.target.value )
    };
    const getSearchResult = () => {
        return search === ""  ?  todo : todo.filter( (it)=>it.content.toLowerCase().includes( search.toLocaleLowerCase() ) )
    };
    const analyzeTodo = useMemo( ()=>{

        // console.log( "analyzeTodo 함수 호출됨 ......");
        
        const totalCount = todo.length;
        const doneCount = todo.filter( (it)=> it.idDone ).length;
        const notDoneCount = totalCount - doneCount;
        return { totalCount, doneCount, notDoneCount };
    }, [todo] );
  
    const {totalCount, doneCount, notDoneCount} =  analyzeTodo;


    
    return(
        <>
        <div className="TodoList"> 
            <h4> Todo List </h4>
            <div>
                <div> 총갯수 : { totalCount }</div>
                <div> 완료된 할일 : { doneCount } </div>
                <div> 아직 완료하지 못한 할 일 : { notDoneCount }</div>
            </div>
            <input onChange={ onChangeSearch } value={ search }
             type="text" className="searchbar" placeholder="검색어를 입력하세요" />

            <div className="list_wrapper">
                { getSearchResult().map( (it) => ( <TodoItem key={it.id} {...it}  /> ) ) }
                
            </div>
        </div>
        </>
    );
}
export default TodoList;