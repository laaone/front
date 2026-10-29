import "./Header.css";
const Header = ()=>{
    return(
        <>
        <div className="Header">
            <h3>오늘은 <img src="./date.png" alt="달력이미지" /> </h3>
            <h1> { new Date().toDateString() }</h1>
        </div>
        </>
    )
}
export default Header;