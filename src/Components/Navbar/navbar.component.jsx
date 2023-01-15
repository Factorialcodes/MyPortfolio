import React from "react";
// import { NavLink } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import { ReactComponent as Logo} from '../../Images/Logo1.svg'
import { 
  MobileView,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks
} from "./navbar.styled";

const Navbar = ({toggle}) => {

  const menu = [
    { id: 1, name: "Home" ,linkUrl:''},
    { id: 2, name: "About",linkUrl:'/About' },
    { id: 3, name: "Service", linkUrl:'/service'},
    { id: 4, name: "Contact", linkUrl:'/contact' },
    { id: 5, name: "Hire me", linkUrl:'/hireme' }
  ];
  return (
    <>
    
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Logo/>
        </NavLogo>

        <MobileView onClick={toggle}>
          <FaBars/>
        </MobileView>

        <NavMenu>
          {menu.map(({id, name, linkUrl}) => (
             <NavLinks key={id} to={`${linkUrl}`}>{name}</NavLinks >
             ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
    </>
    
  )
}

export default Navbar
