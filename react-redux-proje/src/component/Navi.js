import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //UncontrolledDropdown,
  //DropdownToggle,
 // DropdownMenu,
 // DropdownItem,
 // NavbarText
} from 'reactstrap';


const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">anasayfa</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">anasayfa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Profilgüncelle">Profil Güncelle</NavLink>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;