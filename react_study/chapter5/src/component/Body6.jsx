import { useState } from "react";

const Body6 = ()=>{
    console.log("update...");
    
    const [count, setCount] = useState(0);
    const onIncrease = ()=>{
        setCount( count + 1 );
    }
    const onDecrease = ()=>{
        setCount( count - 1 );
    }
    const [text, setText] =useState("");
    const handleOnChange = (e)=>{
        setText(e.target.value);
        
    }
    const [ pw, setPw ] =useState("");
    const handleOnChange2 = (e)=>{
        setPw(e.target.value);
        
    }

    const [ date, setDate ] = useState("");
    const handleOnChange3 = (e)=>{
        setDate( e.target.value);
    }
    const [ option, setOption ] =useState("");
    const handleOnChange4 =(e)=>{
           setOption(e.target.value);
    }
    const [ gender, setGender ] = useState("");
    const onChangeGender = (e)=>{
        setCount(e.target.value);
    }
    return(
        <>
        <h2> &nbsp; &nbsp; &nbsp; {count} </h2>
        <button onClick ={onIncrease} > + </button>
        <button onClick ={onDecrease} > - </button>
        <p/>
        <hr />
        <label htmlFor="login">로그인</label>
        <input type="text"  onChange={handleOnChange}/>
        <p>로그인 입력한 값 {text} </p>
        <label htmlFor="password">비밀번호</label>
        <input type="password" onChange={handleOnChange2} />
        <p> 비밀번호 입력한 값 {pw} </p>

        <label htmlFor="date">날짜</label>&nbsp; &nbsp;
        <input type="date" value= {date} onChange={handleOnChange3} />
        <p>날짜 {date} </p>

        <select name="number" id="number" value={option} onChange={handleOnChange4}>
            <option value={"1번"}> 1번 </option>
            <option value={"2번"}> 2번 </option>
            <option value={"3번"}> 3번 </option>
        </select>
        <p> 드롭상자의 값은 {option}</p>

        <select value={gender} onChange= {onChangeGender}>
            <option key={""}> 성별</option>
            <option key={"남성"}> 남성 </option>
            <option key={"여성"}> 여성 </option>
             </select>
             <p>드롭상자의 값은 {gender}</p>

        </>
    );
}
export default Body6;