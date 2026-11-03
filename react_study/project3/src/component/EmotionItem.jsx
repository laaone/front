import React from "react";
import "./Emotion.css";
import "./EmotionItem.css";


const EmotionItem =( {id, img, name, onClick, isSelected } )=>{
    const handleOnClick = ()=>{
        onClick(id);
    }

    return(
        <>
        <div className= {`EmotionItem ${ isSelected  ?  `EmotionItem_on_${id}` : `EmotionItem_off` }`} onClick={ handleOnClick } >
           <img src={img} alt={`emotin${id}`} />
           <span> {name}</span>  
        </div>
        </>
    )
}
export default EmotionItem
