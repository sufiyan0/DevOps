'use client'
import React, { useState } from 'react';
import { close, logo, menu } from '../assets'
import Image from 'next/image'
import { navLinks } from '../constents'
import { useStyleRegistry } from 'styled-jsx';


const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);



  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Image src={logo} alt="logo" className=" w-[128px]  h-[32px] sm:h-[128px]" />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal text-white cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>

          </li>
        ))}

      </ul>

      <div className="flex flex-1 sm:hidden justify-end items-center">

        <Image src={toggle ? close : menu}
          alt="meny"
          className='sm:h-[28px] w-[28px] object-center'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute hidden top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className='list-none flex sm:hidden flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal text-white cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>

              </li>
            ))}

          </ul>
        </div>




      </div>



    </nav>
  )
}

export default Navbar
