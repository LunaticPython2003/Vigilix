import React from 'react'
import Navbar from './Components/Navbar'
import Levels from './Components/Levels'
import './App.css'

function App() {

  return (
    <>
      <div className='fixed flex border-2 border-black h-full w-full'>
        <Navbar/>
        <Levels/>
      </div>
    </>
  )
}

export default App
