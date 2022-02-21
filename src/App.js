import React from 'react'
import './Styles/app.css'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './Components/UI/Navbar/Navbar'
import AppRouter from './Components/AppRouter'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter >

  )
}

export default App