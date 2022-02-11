import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavItem, NavLinks } from './Navbar.element';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);


  return (
    <>
    <IconContext.Provider value={{ color: '#000067' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to ='/' onClick={closeMobileMenu}>
                  <NavIcon />
                    ANNI
                </NavLogo>
                <HamburgerIcon onClick = {handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </HamburgerIcon>
                <NavMenu onClick='handleClick' click={click}>
                
                <NavItem>
                  <NavLinks to ='/Articles'>Articles</NavLinks>
                </NavItem>
                
                <NavItem>
                  <NavLinks to ='/Projects'>Projects</NavLinks>
                </NavItem>
                
                <NavItem>
                  <NavLinks to ='/Workspace'>Workspace</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/About'>About</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/'>Contact</NavLinks>
                </NavItem>
               
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>  
    </>
  )
}

export default Navbar