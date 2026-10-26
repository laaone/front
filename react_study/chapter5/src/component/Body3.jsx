
import Child from "./Child";
const Body3 = (props)=>{
    console.log(props);
    const { name, location, age, favorList, k=100} = props;
    
    return(
        <>
        <div> {props.name} </div>
        <div> {props.location} </div>
        <div> {props.age} </div>
        <div> {favorList[1]} </div>
        <div> {k} </div>
        <Child  location= {location} heigh={"145"} />
        </>
    );
}
export default Body3;