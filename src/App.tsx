import './App.css'
import {useState, useEffect} from 'react'
import NavBar from './Navbar.tsx'
import Intro from './Intro.tsx'
import Culture from './Culture.tsx'
import MapSection from './MapSection.tsx'
import More from './More.tsx'
import Loading from './Loading.tsx'
import Player from './Player.tsx'

function App() {
	const [loading, setLoading] = useState<Boolean>(true);
	useEffect(() => {
		setTimeout(() => setLoading(false), 4000)
	}, [])
  return (
	<>
	  {loading && <Loading/>}
	  <NavBar/>
	  <Player/>
	  <div className={`main-container ${loading ? 'loading' : ''}`}>
	    <div className='main-container-wrapper'/>
	    <Intro/>
	    <Culture/>
            <MapSection/>
	    <More/>
	  </div>
  	</>
    )
}

export default App
