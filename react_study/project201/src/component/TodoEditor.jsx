import "./TodoEditor.css";
import { useState,useRef } from "react";


const TodoEditor = (props)=>{
     const { onCreate } = props;
     const [ content, setContent ] = useState("");
     const inputRef = useRef();
     const onChangeContent = (e)=>{
        setContent( e.target.value );
     }
     const onKeyDown = (e)=>{
      if(e.keyCode === 13 ) {
         onSubmit();
      }
     }
     const onSubmit = ()=>{
      if( !content ) {
         inputRef.current.focus();
         return;
      }
        onCreate( content );
        setContent("");
     }
   
   return(
      <>
        <div className="TodoEditor">
            <h4> 새로운 Todo 작성하기 </h4>
            <div className="editor_wrapper">
                <input type="text" placeholder="새로운 Todo..." 
                      value={content} onChange={ onChangeContent }
                       ref={ inputRef} onKeyDown={onKeyDown} />
                <button onClick={ onSubmit }> 추가 </button>
            </div>
        </div>
     </>
    );
}
export default TodoEditor

