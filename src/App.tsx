import { useState } from 'react'
import './App.css'
import Lugar from './Lugar.tsx'
import Culture from './Culture.tsx'
import Issues from './Issues.tsx'
import Facts from './Facts.tsx' 


function App() {

  return (
	<div className='main-container'>   
		<Lugar/>
		<Culture/>
		<Issues/>
		<Facts/>	
	</div>
  )
}

export default App
