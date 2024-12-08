import React from 'react'
import { useTheme } from '../context/ThemeContext'
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <>
    <button onClick={toggleTheme} className='bg-gray-200'>
        {theme==="light"?"Switch to dark":"Switch to light"}
    </button>
    </>
  )
}

export default ThemeToggle
