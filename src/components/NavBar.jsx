import React, { useState } from 'react';
import images from '../constants/images';
import "./Style.css";
import { RiPencilRuler2Line } from "react-icons/ri";

function NavBar() {
  const [DropdowMenu, setDropdownMenu] = useState(false);

  return (
    <nav>
      <img src={images.logowithtext} alt="App logo with transparent background, stylized design, displayed on a dark navigation bar, no visible text, modern and welcoming tone"
        style={
          {
            maxWidth: '30%',
            minWidth: '150px',
            zIndex: 5,
            filter: 'drop-shadow(0px 0px 0.2rem rgb(255, 255, 255))',
          }
        } />
      <ul className='nav-links'>
        <li><a href="#home">Home</a></li>
        <span className='nav-separator'>|</span>
        <li><a href="#team">Team</a></li>
        <span className='nav-separator'>|</span>
        <li><a href="#portfolio">Portfolio</a></li>
        <span className='nav-separator'>|</span>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='dropdown'>
        {!DropdowMenu && (
          <div
            className={`menu-icon-container ${DropdowMenu ? 'icon-hide' : 'icon-show'}`}
            color="#5B9197"
            onClick={() => setDropdownMenu(true)}
          >
          <div className='menu-icon' />
          <div className='menu-icon' />
          </div>
        )}
        {DropdowMenu && (
          <div className='dropdown-icon'>
            <RiPencilRuler2Line
              color="#5B9197"
              fontSize={35}
              className={`close-icon ${DropdowMenu ? 'icon-show' : 'icon-hide'}`}
              onClick={() => setDropdownMenu(false)}
            />
            
            <ul className='dropdown-menu'>
              <li><a href="#home">Home</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;