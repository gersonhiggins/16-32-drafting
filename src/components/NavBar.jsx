import React from 'react';
import images from '../constants/images';
import "./Style.css"; // Assuming you have a Style.css file for global styles

function NavBar() {
  return (
    <nav>
      <img src={images.logowithtext} alt="App logo with transparent background, stylized design, displayed on a dark navigation bar, no visible text, modern and welcoming tone"
        style={
          { maxWidth: '50%',
            filter: 'drop-shadow(0px 0px 0.2rem rgb(255, 255, 255))',
           }
        } />
      <h2>
        for architects, civil engineers, and residential builders
      </h2>
      <p className='llc'>
        16-32 drafting, LLC
      </p>
    </nav>
  );
}

export default NavBar;