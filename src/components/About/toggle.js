import React from 'react'
import NewYork from "../Portfolio/NewYork"
import "../image.css"
import {AiFillMinusCircle} from 'react-icons/ai'





function Toggle({open, onClose}) {
    if (!open) return null
    
    return(
        <>
        <div className="image-container">
      
      <h1><span className="res-txt">upcoming reel</span> <span className="res-txt"> ( New York )</span> </h1>
      <AiFillMinusCircle size={100}  style={{paddingTop:'10px'}}    onClick={onClose}>
         
          </AiFillMinusCircle>
      <NewYork  />
      
      
    </div>
    </>
    )
}

export default Toggle;