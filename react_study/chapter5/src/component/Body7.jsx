
import { useState } from "react";
const Body7 = ()=>{
    const [ state, setState ] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: ""
    });
    const handleOnChange = (e) => {
        console.log("현재 수정 대상 ==> ", e.target.name);
        
        console.log( "현재 수정된 값 ==>", e.target.value );

        
        setState( {
            ...state,
            [ e.target.name]: e.target.value,
        });
    }
    return(
        <>
        <div>
                <input type="text" name="name" value={state.name} 
                    onChange = {handleOnChange} placeholder ="이름"/>
                    </div>
                    <div>
                        <select name="gender" value={state.gender} onChange={handleOnChange}>
                        <option key=""></option>
                        //   key이름은 변수에 담긴 값으로 동적으로 전하고 싶을때 []을  사용
                        //   key: value; 고정 [key]:value 동덕 key변수의 값을 평가해서 그 결과를 속성명으로 사용
                        <option key={"남성"}> 남성 </option>
                        <option key={"여성"}> 여성 </option>
                    </select>
                </div>
                <div>
                    <input type="date" name="birth" value={state.birth} onChange={handleOnChange} />
                </div>
                <div>
                    <textarea name="bio" value={state.bio} onChange={handleOnChange}></textarea>
                </div>
          
        </>
    );
}
export default Body7