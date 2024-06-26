import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import EditPage from './pages/EditPage/EditPage'
import AddPage from './pages/AddPage/AddPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:id' element={<EditPage/>}/>
        <Route path='/create' element={<AddPage/>}/>
      </Routes>
    </div>
  )
}

export default App