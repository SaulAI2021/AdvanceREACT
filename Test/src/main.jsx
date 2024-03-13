import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

  /**
   * Cuerpo principal e nuestra aplicación
   * @returns {React.Component} Componente principal de la aplicacion
   */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
