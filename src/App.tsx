import { useState } from 'react'
import './App.css'
import NavBar from './Navbar.tsx'
import Intro from './Intro.tsx'
import Culture from './Culture.tsx'
import MapSection from './MapSection.tsx'
import Issues from './Issues.tsx'
 


function App() {

  return (
	<>
	  <NavBar/>
	  <div className='main-container'>   
	    <Intro/>
	    <Culture/>
            <MapSection/>
	    <Issues/>
	  </div>
  	</>
    )
}

export default App
