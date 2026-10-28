import "./Body.css"

const Body =(props) =>{
    const  {children} = props;
    const numbur = 1;
    const numA = 1;
    const numB = 2;
    const strA = "안녕";
    const strB = "리액트";
    const boolA = true;
    const boolB = false;
    const objA = { a:1, b:2 } //안됨
    return(
        <>
          <ul className="body">
             <li>자바</li>
             <li>html</li>
             <li>css</li>
             <li> { numbur } </li>
             <li> {numA +numB } </li>
             <li> { strA + "  " + strB } </li>
             <li> { String(boolA || boolB) } </li>
             <li> 객체자료 {objA.a}---- {objA.b} </li>
             <li> 조건부 랜더링 :   {numbur} 는{ numbur % 2 === 0 ? "짝수" : "홀수" } 입니다.   </li>
             <li> {children} </li>
            </ul>
        </>
    );
}

export default Body;