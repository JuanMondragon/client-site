
import styled from 'styled-components'
import {Link} from "gatsby"
import {MdCameraRoll}  from "react-icons/md"


export const Nav = styled.nav `

background: ${({ active }) => active ? "#fff" : "linear-gradient(to bottom, rgba(255, 255,255, 0.9 )0%, rgba(255,255,255, 0 )100%)" };
font-family: "Montserrat", sans-serif;
height:80px;
display: flex;
justify-content:center;
align-items: center;
font-size: 1rem;
position:sticky;
top:0;
z-index:999;
text-transform:uppercase;


@media screen and (max-width: 960px) {
    background: ${({ click })=> (click ? "#fff" : "fff")};
    transition:0.6s all ease;
}

`

export const NavContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
max-width:1000px;


`

export const NavLogo = styled(Link)`
color:#000;
justify-self:flex-start;
cursor: pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
font-weight:bolder;


`

export const NavIcon = styled(MdCameraRoll)`
margin: 0  0.5rem 0 2rem;

`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 960px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;

}
`

export const NavMenu =styled.ul`

display:flex;
align-items:center;
list-style:none;
text-align: center;
font-weight:bold;



@media screen and (max-width: 960px ){
display:flex;
flex-direction:column;
width:100%;
height:90vh;
position:absolute;
top: ${({ click }) => (click ? "100%" : "-1000px") };
    opacity:1;
    transition: all 0.4s ease;
    background: #fff;


}
`

export const NavItem =styled.li`
height:80px;

@media screen and (max-width: 960px) {
    width:100%
}
`

export const NavLinks = styled(Link)`
color:#000;
display:flex;
align-items:center;
text-decoration:none;
padding: 0.5rem 1rem;
height:100%;
font-family: "Montserrat", sans-serif;

@media screen and (max-width:960 px ) {
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;

    &:hover {
        color:#fff;
        transition: all 0.2s ease;
    }
}

`


