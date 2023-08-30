import fearless from './fearless.jpg'
import rtv from './rtv.jpg'
import ts from './ts.png'
import evermore from './evermore.png'
import sn from './sn.jpg'
import a1989 from './1989.jpg'
import rep from './rep.jpg'
import lover from './lover.jpg'
import folklore from './folklore.jpg'
import mn from './mn.jpg'
import blank from './blank.png'

// eslint-disable-next-line react/prop-types
const AlbumCovers = ({albumTitle}) => {

    switch (albumTitle) {
        case "Taylor Swift": 
            return <img src={ts} alt="Taylor Swift album cover" />;
        case "Red (TV)":
            return <img src={rtv} alt="Red (TV) album cover" />;
        case "1989":
            return <img src={a1989} alt="1989 album cover" />;    
        case "Fearless (TV)":
            return <img src={fearless} alt="Fearless (TV) album cover" />;  
        case "Speak Now":
            return <img src={sn} alt="Speak Now album cover" />;  
        case "reputation":
            return <img src={rep} alt="Reputation album cover" />;  
        case "Lover":
            return <img src={lover} alt="Lover album cover" />;
        case "folklore":
            return <img src={folklore} alt="Folklore album cover" />;
        case "evermore":
            return <img src={evermore} alt="Evermore album cover" />;
        case "Midnights":
            return <img src={mn} alt="Mignights album cover" />;
        default:
            return <img src={blank} alt="Other Albums"/>
    }
}

export default AlbumCovers