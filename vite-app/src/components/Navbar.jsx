import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
const Navbar = () => {
  return (
    <>
    <nav className='bg-gray-900 p-4'>
        <Link
        to="/"
        className='text-white text-2xl font-bold'
        >
        Countery Finder
        </Link>
        <div >
          <ThemeToggle/>
        </div>
    </nav>
    </>
  )
}

export default Navbar
