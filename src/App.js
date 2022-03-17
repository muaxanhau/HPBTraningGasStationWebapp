import React from 'react'
import { GlobalStyles } from './constants'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Login,
  DetailGasStation,
  EditGasStation,
  NewGasStation,
  ListGasStation
} from './pages'

function App () {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='detail' element={<DetailGasStation />} />
          <Route path='edit' element={<EditGasStation />} />
          <Route path='new' element={<NewGasStation />} />
          <Route path='list' element={<ListGasStation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
