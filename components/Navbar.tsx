import React from 'react'

export const Navbar = () => {
  return (
      <nav className='sticky top-0 left-0 max-w-screen bg-[#FFFFFF03] backdrop-blur-[10px] border-solid shadow-md '>
          <ul className='flex justify-evenly py-[1%]'>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>Contact</li>
          </ul>
    </nav>
  )
}
