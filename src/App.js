import React from 'react'
import Home from './Home'
import './App.css'
// import Hello from './Hello'
import Nav from './Nav'
import { Routes, Route } from "react-router-dom"
import About from './About.js' 
import Contact from './Contact.js'

const App = () => {
  // let app='Ashu'
  

  return (

    
    <div>
<Nav/>
  <routes>
    <route  path='/' element={<Home/>}/>
    <route  path='/about' element={<About/>}/>
    <route  path='/contact' element={<Contact/>}/>
  </routes>


{/* 
      <h1 className='one' id='a'>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1> */}



      {/* <Home /> */}
      {/* <Hello/> */}
    </div>
  )
}

export default App

// combination of html and js is called jsx 

// babbel software is use to convert jsx to object ,bcoz browser  only read js object

// npm create-react-app filename
// npx create-react-app filename