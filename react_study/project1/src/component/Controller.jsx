const Controller = (props) =>{
    const {handleSetCount} = props;

    return(
        <>
        <button onClick={ ()=>handleSetCount(-1) }>-1</button>
        <button onClick={ ()=>handleSetCount(-10) }>-10</button>
        <button onClick={ ()=>handleSetCount(-100) }>-100</button>
        <button onClick={ ()=>handleSetCount(+1) }>+1</button>
        <button onClick={ ()=>handleSetCount(+10) }>+10</button>
        <button onClick={ ()=>handleSetCount(+100) }>+100</button>
        </>
    );
}
export default Controller;
