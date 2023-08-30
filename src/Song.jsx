/* eslint-disable react/prop-types */
const Song = ({song}) => {
    const playAudio = (song) => {
        const audio = new Audio(song.track.preview_url);
        audio.play();
        setTimeout(() => {
            audio.pause();
        }, 1000)
    }

    const songReveal = (song) => {
        alert(song.track.name);
    }

    return (
      <div className="taylor-songs">
            <button onClick={() => playAudio(song)}>Listen</button>
            <button onClick={() => songReveal(song)}>Reveal</button>
      </div>
    );
  };

export default Song