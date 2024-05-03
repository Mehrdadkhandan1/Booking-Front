import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HotelContext from './context/HotelContext.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HotelContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HotelContext>
  </React.StrictMode>,
)
