// src/App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import StarryBackground from './components/StarryBackground'; // Make sure the path is correct
import audioFile from './assets/Fadedsong.mp3'; // Make sure the audio file path is correct

const App = () => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Load the audio file
    }

    // Add a click event listener to start audio playback
    document.addEventListener('click', handlePlayAudio);
    return () => {
      document.removeEventListener('click', handlePlayAudio);
    };
  }, []);

  return (
    <div className="App">
      <StarryBackground /> {/* Include the star background */}
      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <button onClick={handlePlayAudio}>Play Music</button> {/* Play button */}
    </div>
  );
};

export default App;
