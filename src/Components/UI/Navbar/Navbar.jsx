import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../Context'
import st from './Navbar.module.css'



function Navbar() {
  const { setIsAuth } = useContext(AuthContext)

  const Exit = () => {
    setIsAuth(false)
    localStorage.removeItem('Auth')
  }

  return (
    <div className={st.navbar}>
      <Link to="/About" className={st.navbar__links}>About</Link>
      <Link to="/Posts" className={st.navbar__links}>Posts</Link>
      <button onClick={Exit} className={st.exit__btn}>Exit</button>
    </div>

  )
}

export default Navbar