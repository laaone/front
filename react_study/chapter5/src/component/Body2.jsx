const Body2 = ()=> {
    const num = 200;
    if (num % 2 === 0){
    return(
       <>
       <div> {num}은 짝수입니다. </div>
        </>
    );
}else{
    return(
        <>
        <div> {num}은 홀수입니다. </div>
        </>
    );
}
}
export default Body2