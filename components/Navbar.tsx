import React from 'react'

export const Navbar = () => {
  return (
      <nav className='sticky top-0 left-0 w-full bg-[#FFFFFF05] backdrop-blur-[5px] border-solid '>
          <ul className='flex justify-evenly py-[1%]'>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>Contact</li>
          </ul>
    </nav>
  )
}
