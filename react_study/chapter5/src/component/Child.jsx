
const Child = (props)=>{
    const  { location } = props;
    return(
        <>
            <h2> 여긴 Child 컴포넌트 </h2> 
            <h3> {location} </h3>
        </>
    );
}
export default Child;
