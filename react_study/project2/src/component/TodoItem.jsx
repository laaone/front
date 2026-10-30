import "./TodoItem.css";
import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";




const TodoItem =({ id, idDone, content, createdDate })=>{
   const { onUpdate, onDelete } = useContext( TodoDispatchContext )
   
   {
   console.log( `${id} TodoItem 업데이트 ....`);
   }
     const onChangeCheckbox = ()=> {
        onUpdate(id);
     }

     const onClickDelete = () =>{
        onDelete(id);
     }
    return(
        <>
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" onChange={ onChangeCheckbox }  checked={idDone}  />
            </div>
            <div className="titl_col"> {content} </div>
        <div className="date_col">{new Date( createdDate ).toLocaleDateString()} </div>
              <div className="btn_col">
                 <button onClick = {onClickDelete}>삭제</button>
              </div>
           </div>
        </>
    );
}

export default  React.memo(TodoItem);

