import Header2 from "./component/Header2";
import Body from "./component/Body";
import Body5 from "./component/Body5";
import Body6 from "./component/Body6";
import Body7 from "./component/Body7";
import Body8 from "./component/Body8";

const ChildComp = ()=>{
    return(
        <>
        <h3> Child Component </h3></>
    );
}

const App = () =>{
    
    return (
        <>
          <Body8/>
        </>
    );
}
export default App;


//  <Body6/>
//         <Body5/>

//         <Header2  name = {name} tel= {tel}    {...bodyProps} />
//          <Body>{/* //자식컴포넌트에 배치하면 자동으로 Body의 props로 전달됨  */}
//             <ChildComp/>

//         </Body>