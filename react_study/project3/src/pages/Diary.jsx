import { useParams } from "react-router-dom";


const Disry = ()=> {
      const {id} = useParams();  //주소의 파라미터값을 받아서 id 객체에 담는다
     
      


    return(
        <>
        <div> {id}번 일기 </div>
        <div> Disry 페이지 </div>
        </>
    )
}
export default Disry