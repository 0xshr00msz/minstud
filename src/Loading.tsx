import { useState, useEffect } from 'react';
import './App.css';

export default function Loading() {
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const handleUserClick = () => {
      setFadeOut(true);
      window.removeEventListener('click', handleUserClick);
    };

    window.addEventListener('click', handleUserClick);

    return () => {
      window.removeEventListener('click', handleUserClick);
    };
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <h2>Minstud Final Project</h2>
      <h3>Click Anywhere to Continue...</h3>
      <p>Disclaimer: We do not own any of the pictures and audio used</p>
      <div className='members'>
        <p>Presented by:</p>
        <ol>
          <li>Guillen</li>
          <li>Magpusao</li>
          <li>Mante</li>
          <li>Manalo</li>
          <li>Morgia</li>
	  <li>Veloso</li>
          <li>Veras</li>
        </ol>
      </div>
    </div>
  );
}

