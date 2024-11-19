import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setshowMenu] = useState(false);
  const [token, setToken] = useState(true);

  // Lock the background scroll when the menu is open
  if (showMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>All Doctors</li>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>About</li>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>Contact</li>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          
          <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        )}
        <img onClick={() => setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="menu" />

        {/* ---------mobile menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-20 transition-all duration-300 ease-in-out bg-white ${showMenu ? 'w-full' : 'w-0'} overflow-hidden`}
        >
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="logo" />
            <img className='w-7 cursor-pointer' onClick={() => setshowMenu(false)} src={assets.cross_icon} alt="close" />
          </div>
          <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
            <NavLink to='/' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink to='/doctors' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
            <NavLink to='/about' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink to='/contact' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
