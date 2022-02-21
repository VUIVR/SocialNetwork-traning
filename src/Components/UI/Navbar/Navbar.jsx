import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../Context'



function Navbar() {
  const { setIsAuth } = useContext(AuthContext)

  const Exit = () => {
    setIsAuth(false)
    localStorage.removeItem('Auth')
  }

  return (
    <div className='navbar'>
      <Link to="/About" className='navbar__links'>About</Link>
      <Link to="/Posts" className='navbar__links'>Posts</Link>
      <button onClick={Exit} className='exit__btn'>Exit</button>
    </div>

  )
}

export default Navbar