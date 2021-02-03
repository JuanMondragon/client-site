import React,{useState} from "react"
import "../image.css"

import {  ImgStyles, InfoContainer, InfoGrid, LeftSide , RightSide, BtnContainer} from "./AboutElements"

import Selfie from "../../images/headshot.jpg"
import Toggle from "./toggle"
import {BiChevronsDown} from 'react-icons/Bi'




const Information = () => {

  const [isOpen, setIsOpen] =useState(false)
  
   
   
  return (
    <>
    <InfoContainer>
      <InfoGrid>
      <LeftSide>
          
         <ImgStyles src={Selfie}  />
          
      
        
        <h1>follow my journey</h1>
        
      </LeftSide>
      <h2>as i travel the united states searching for the perfect photo </h2>
      <RightSide >
        <p>
         what started as a hobby has soon taken over my life. i got my first camera when i was 17 and even though i had no idea how to shoot film i just dove in head first.
         ranging from portraits to weddings and everything in between i found my niche when it comes to lanscape photograhpy. i was able to mix two of my passions, traveling with photography. im able to share my passions with my friends and clients who buy my prints. giving other people a taste of adventure by capturing the landscape like never before. although i am relatively new to the scene i have made great connections with other names in the scene and i hope with their knowledge and practice i am able to bring even more  adventure to those who may not be able to travel.
          </p>
      </RightSide>
      
      
      </InfoGrid>
      <BtnContainer>
      < BiChevronsDown size={100}onClick={()=>setIsOpen(true)} style={{paddingTop:'10px', cursor:'pointer'}}/>
      </BtnContainer>
      
    </InfoContainer>
    
   
   
    <Toggle open={isOpen} onClose={()=> setIsOpen(false)}></Toggle>
    
    
    
    
    

      
  </>
    
        
      
    
  )
}
  

export default Information

