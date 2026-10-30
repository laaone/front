import React from "react"


import Header from "./component/Header";
import Body from "./component/Body";

const MyContext = React.createContext(defaultValue);

function App(){
  const data = 'dataere';


  return(
    <>
    <div>
      <Header/>
      <MyContext.Provider value={data}>
       <Body />
    </div>
    </>
  )
}


export default App
