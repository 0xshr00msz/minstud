import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import idana from './assets/idana.mp3';

export default function Player() {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [play, { sound }] = useSound(idana, {
    loop: true, // Ensures the song loops
    preload: true, // Preloads the audio file
  });

  // Play the sound immediately when the component mounts
  useEffect(() => {
    if (sound) {
      play();
    }
  }, [play, sound]);

  const handleMute = () => {
    setIsMuted((prev) => {
      if (sound) {
        sound.mute(!prev); // Toggle mute state
      }
      return !prev; // Update the mute state
    });
  };

  return (
    <div className="player" onClick={handleMute}>
        {isMuted ? 'Unmute' : 'Mute'}
    </div>
  );
}

