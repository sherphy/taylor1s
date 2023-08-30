import songs from "./assets/TaylorSongs.json";
import Song from "./Song";
import { useState } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Home = () => {
  const shuffledSongs = shuffleArray([...songs]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const nextSong = () => {
    if (currentSongIndex < shuffledSongs.length - 1) {
      setCurrentSongIndex(currentSongIndex+1);
    }
  }

  return (
    <div className="home">
        <Song song={shuffledSongs[currentSongIndex]}/>
        <button onClick={() => nextSong()}>Next</button>
    </div>
  );
};

export default Home;
