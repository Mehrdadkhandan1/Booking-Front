import React, { useEffect } from 'react'
import Layout from './Components/Layout/Layout'
import Header from './Components/header/Header'
import axios from 'axios'
import api from './Services/Api'
import { Route, Router, Routes } from 'react-router-dom'
import Hotel from './Components/template/Hotel/Hotel'
import ShowHotels from './Components/template/ShowHotels/ShowHotels'

const App = () => {

  return (
    <Layout >
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/showHotels' element={<ShowHotels />} />
          <Route path='/:id' element={<Hotel />} />
        </Routes>
      </main>

    </Layout>
  )
}

export default App
