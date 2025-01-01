import './App.css'
import NavBar from './Navbar.tsx'
import Intro from './Intro.tsx'
import Culture from './Culture.tsx'
import MapSection from './MapSection.tsx'
import More from './More.tsx'


function App() {

  return (
	<>
	  <NavBar/>
	  <div className='main-container'>   
	    <Intro/>
	    <Culture/>
            <MapSection/>
	    <More/>
	  </div>
  	</>
    )
}

export default App
