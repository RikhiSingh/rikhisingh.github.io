import React from 'react';
// images
import Logo from '../assets/logo.png'

const Header = () => {

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/rikhi-singh/', '_blank');
  };

  return <header className='py-7'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img className='w-[60px]' src={Logo} alt="" />
        </a>
        {/* button */}
        <button className='btn btn-sm' onClick={openLinkedInProfile}>
          Work with ME!
        </button>
      </div>
    </div>
  </header>;
};

export default Header;
