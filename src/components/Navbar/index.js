import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarElements"


const Navbar = () => {

    const [ click, setClick ] = useState(false)
    const [ scroll, setScroll ] = useState(false)
    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])
    return (
        <>
        <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavContainer>
            <NavLogo to="/">
              <NavIcon />
              PHOTO-JAY
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks to="/collection">Portfolio</NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
        </>

    )
}

export default Navbar
