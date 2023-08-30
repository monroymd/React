import React from 'react'
import ReactDOM from 'react-dom/client'
import Ejercicio01 from './contenidos/Ejercicio01.jsx'
import NavBar from './contenidos/NavBar.jsx'
import Footer from './contenidos/Footer.jsx'
import Inicio from './contenidos/Inicio.jsx'
import Main from './contenidos/Main.jsx'
import Ejercicio03 from './contenidos/Ejercicio03.jsx'
import Ejercicio04 from './contenidos/Ejercicio04.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar className="navbar" />
      <Routes>
        <Route path='/ejercicio01' element={<Ejercicio01 />} />
        <Route path='/ejercicio02' element={<Main />} />
        <Route path='/ejercicio03' element={<Ejercicio03 />} />
        <Route path='/ejercicio04' element={<Ejercicio04 />} />
        <Route path='/' element={<Inicio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
