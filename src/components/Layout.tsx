import React from 'react';
import NavbarContainer from './Navbar/Navbar';
import logo from '../images/logo.png';

interface props {
  children: any
}
export default function (props: props) {
  const links = {
    home: {
      recipe: 'recipe box'
    }
  }
  return (
    <div className="container-fluid">
      <NavbarContainer Links={links} brandLogo={logo}></NavbarContainer>
      {props.children}
    </div>
  )
}
