import React from 'react';
// images
import Logo from '../assets/logo.png'

const Header = () => {
  return <header className='py-7'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img className='w-[60px]' src={Logo} alt="" />
        </a>
        {/* button */}
        <button className='btn btn-sm'>
          Work with ME!
        </button>
      </div>
    </div>
  </header>;
};

export default Header;
