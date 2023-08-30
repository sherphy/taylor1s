/* eslint-disable react/prop-types */
import { useState } from "react";
import AlbumCovers from "./assets/AlbumCovers";

const Song = ({ song, nextSongIndexHandler }) => {
  const [isSongDone, setSongDone] = useState(false);

  const playAudio = (song) => {
    const audio = new Audio(song.track.preview_url);
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 1000);
  };

  const nextSong = () => {
    nextSongIndexHandler();
    setSongDone(false);
  };

  return (
    <div className="taylor-songs">
      <button onClick={() => playAudio(song)}>Listen</button>
      {isSongDone ? (
        <div className="revealed">
          <div className="details">
              <AlbumCovers albumTitle={song.track.album.name} />
            <div className="back">{song.track.name}</div>
            </div>

          <button onClick={() => nextSong()}>Next</button>
        </div>
      ) : (
        <button onClick={() => setSongDone(true)}>Reveal</button>
      )}
    </div>
  );
};

export default Song;
