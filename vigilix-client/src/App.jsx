import React from 'react'
import Navbar from './Components/Navbar'
import Levels from './Components/Levels'
import './App.css'

function App() {

  return (
    <>
      <div className='flex border-2 border-black'>
        <Navbar/>
        <Levels/>
      </div>
    </>
  )
}

export default App
