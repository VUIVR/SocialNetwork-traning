import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/About" className='navbar__links'>About</Link>
      <Link to="/Posts" className='navbar__links'>Posts</Link>
    </div>
  )
}

export default Navbar