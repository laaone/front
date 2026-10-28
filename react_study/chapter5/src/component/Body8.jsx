import { useRef, useState } from "react";

const Body8 = ()=>{
   const [text, setText ] = useState("");
   const textRef = useRef(); //DOM을 직접 제어하기

   const handleOnChange = (e)=>{
         setText( e.target.value )
   }
   const handleOnClick = ()=>{
    if( text.length < 5){
        textRef.current.focus();
    }else{
    alert(text);
    textRef.current.value = "";
      }
   }

    return(
        <>
        <input ref={textRef} type="text" value={text} onChange={handleOnChange} />
        <button onClick={handleOnClick}>작성 완료</button>
        </>
    );






}
export default Body8;