import "./App.css";
import { useState,useEffect , useRef } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import Even from "../../chapter5/src/component/Even";



function App() {

  const [ count, setCount ] = useState(0);
  const [ text, setText] = useState("");
  const didMountRef = useRef(false);


  const handleSetCount = (v)=>{
    setCount( count + v)
  }
  const handleChangeText = (e) =>{
    setText(e.target.value);
  }
  
  // useEffect( ()=>{
  //   if( !didMountRef.current) { //마운트인 상태 처음인 경우가 거짓이니까
  //     didMountRef.current = true;
  //     console.log( "컴포넌트 마운트...");
  //     return;
  //   }else {  //업데이트상태
  //     console.log( "컴포넌트 업데이트...");
      
  //   }
  //   console.log("컴포넌트 업데이트...");
  // },[]); //빈 배열을 전달하면 컴포넌트의 마운트 시점에서만 콜백함수를 실행한다. 클래스에서 생성자와 비슷한 기능

  // useEffect( ()=>{
  //                const intervalID = setInterval( ()=>{ console.log( "깜빡^^" );
  //                 }, 1000);
  //                 return ()=>{
  //                   console.log("크린업~~~");
  //                   clearInterval( intervalID); // 언마운트
  //                 }

  //                 }); // 1000ms  밀리세크 = 1초
  

  return (
    <>
    <div className="App">
      <h1> Sinple Counter </h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={ count }/>
        { count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleSetCount={ handleSetCount }/>
      </section>
    </div>
     
    </>
  )
}

export default App
