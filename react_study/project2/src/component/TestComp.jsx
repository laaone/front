import { useReducer } from "react";

const reducer = (state, action) =>{  //상태변화코드
      switch (action.type) {
        case "INCREASE": return state + action.data;
        case "DECREASE": return state - action.data;
        case "INCREASE5": return state + action.data;
        case "DECREASE5": return state - action.data;
        case "INIT" : return 0;
        default :return state;
      }
    }

const TestComp = ()=>{
    const [ count, dispatch] = useReducer( reducer,0 );


    //const [count, setCount] = useState(0);
    // const onIncrease = ()=>{  //상태변화코드
    //     setCount( count +1)
    // }
    // const onDecrease = ()=>{
    //     setCount( count -1)
    // }



    return(
        <>
        <div>
            <h4> 테스트 컴포넌트 </h4>
            <div>
              <b>{ count }</b>
            </div>
            <div>
        <button onClick={ ()=> dispatch( { type: "INCREASE", data: 1} ) } > + </button>
        <button onClick={ ()=> dispatch( { type: "DECREASE", data: 1} ) }> - </button>
        <button onClick={ ()=> dispatch( { type: "INCREASE5", data: 5} ) } >+5 </button>
        <button onClick={ ()=> dispatch( { type: "DECREASE5", data: 5} ) }> -5 </button>
        <button onClick={ ()=> dispatch( { type: "INIT"} ) }> 초기화 </button>
        </div>
        </div>
        </>
    )
}
export default TestComp ;