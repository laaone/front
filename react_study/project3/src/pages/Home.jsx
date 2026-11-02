import {  useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const Home = ()=> {
    const [ searchParams, setSearchParams ] = useSearchParams();
    console.log( searchParams );
    

    return(
        <>
        <Header title={"Home"} 
        leftChild={ <Button type ="positive"  text= {"긍정 버튼"}  onClick={ ()=>{alert("긍정 버튼")} } /> } 
        rightChild={ <Button type = "negative"  text= {"부정 버튼"}  onClick={ ()=>{alert("부정 버튼")} } />} 
       />
        <Editor onSubmit={()=>{ alert("작성완료버튼을 클릭했음")}}/>
        
        
        
        </>
    )
}
export default Home