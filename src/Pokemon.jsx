import songs from "./assets/PokemonSongs.json";
import Song from "./Song";
import { useState, useRef } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Pokemon = () => {
  const shuffledSongsRef = useRef(shuffleArray([...songs]));
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const nextSongIndexHandler = () => {
    if (currentSongIndex < shuffledSongsRef.current.length - 1) {
      setCurrentSongIndex(currentSongIndex+1);
    }
  }

  return (
    <div className="home">
        <Song song={shuffledSongsRef.current[currentSongIndex]} nextSongIndexHandler={nextSongIndexHandler}/>
    </div>
  );
};

export default Pokemon;
