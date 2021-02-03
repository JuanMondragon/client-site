
import styled from "styled-components"


export const InfoContainer= styled.div`
 
  
  margin: 150px 0;
  font-weight: bolder;
  text-transform: uppercase;
  
  z-index: 2;

  
  
  
`
export const InfoGrid=styled.div`
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(auto-fill, minmax (400px, 1fr));
grid-template-rows: minmax(50px, auto);
margin: 0 auto;
max-width: 1000px;
padding: 0 32px;
width: 100%;
`

export const LeftSide=styled.div`
text-align:center;
h1 {
  padding-top:5%;
}
`
export const ImgStyles=styled.img`
border-radius:50%;

width:175px;
height:175px;



`

export const RightSide=styled.div`
line-height:150%;

`

export const Bttn =styled.button`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
border:none;



width:100%;
`

export const BtnContainer= styled.div`
text-align:center;

`