import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './Navbar.tsx';
import Intro from './Intro.tsx';
import Culture from './Culture.tsx';
import MapSection from './MapSection.tsx';
import More from './More.tsx';
import Loading from './Loading.tsx';
import Player from './Player.tsx';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleUserClick = () => {
      setTimeout(() => setLoading(false), 2600);
      window.removeEventListener('click', handleUserClick);
    };

    window.addEventListener('click', handleUserClick);

    return () => {
      window.removeEventListener('click', handleUserClick);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <NavBar />
      <Player />
      <div className={`main-container ${loading ? 'loading' : ''}`}>
        <Intro />
        <Culture />
        <MapSection />
        <More />
      </div>
    </>
  );
}

export default App;

