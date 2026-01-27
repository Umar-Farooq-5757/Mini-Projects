import {  SlidersHorizontal  } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-white py-3 px-28 flex items-center justify-between shadow-sm'>
      <h1>Keyboard Lab</h1>
      <button><SlidersHorizontal /></button>
    </header>
  )
}

export default Header
