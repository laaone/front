const Body5 = ()=>{
    const hadleOnClick = ()=>{
        alert("버튼을 클릭하셨군요!");
    }
    const hadleOnClick2 = (e)=>{
       console.log(e.target.name);
       alert(e.target.name);
    }
    return(
        <>
        <div className="body">
            <button onClick={ hadleOnClick} > 클릭하세요 </button>
            <p/>
            <button name="A버튼" onClick={hadleOnClick2}> A버튼 </button>
            <button name="B버튼" onClick={hadleOnClick2} >B버튼 </button>
        </div>
        </>
    );
}
export default Body5;