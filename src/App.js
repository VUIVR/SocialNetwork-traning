import React, { useState, useEffect } from 'react'
import './Styles/app.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/UI/Navbar/Navbar'
import AppRouter from './Components/AppRouter'
import AuthContext from './Context'


function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('Auth')) {setIsAuth(true)}
    else {setIsAuth(false)}
  }, [])
  

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter >
    </AuthContext.Provider>


  )
}

export default App