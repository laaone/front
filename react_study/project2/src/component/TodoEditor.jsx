import "./TodoEditor.css";
import { useState } from "react";

const TodoEditor = (props)=>{
     const { onCreate } = props;
     const [ content, setContent ] = useState("");
     const onChangeContent = (e)=>{
        setContent( e.target.value );
     }
     const onSubmit = ()=>{
        onCreate( content );
     }

   return(
      <>
        <div className="TodoEditor">
            <h4> 새로운 Todo 작성하기 </h4>
            <div className="editor_wrapper">
                <input type="text" placeholder="새로운 Todo..." value={content} onChange={ onChangeContent }  />
                <button onClick={ onSubmit }> 추가 </button>
            </div>
        </div>
     </>
    );
}
export default TodoEditor

