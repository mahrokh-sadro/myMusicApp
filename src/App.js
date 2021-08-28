

import { useState, useEffect } from 'react';
import Player from './player.js';



function App() {
    const [songs] = useState([
        {
            singer: "aaa",
            title: "song1",
            img_src: "./images/1.jpg",
            song_src: "./songs/1.mp3"
        },
        {
            singer: "aaa",
            title: "song1",
            img_src: "./images/1.jpg",
            song_src: "./songs/1.mp3"
        }, {
            singer: "bb",
            title: "song2",
            img_src: "./images/2.jpg",
            song_src: "./songs/2.mp3"
        }, {
            singer: "cc",
            title: "song3",
            img_src: "./images/3.jpg",
            song_src: "./songs/3.mp3"
        }
    ]);

    const [currentSongIdx, setCurrentSongIdx] = useState(0);
    const [nextSongIdx, setNextSongIdx] = useState(currentSongIdx + 1);

    useEffect(() => {
        setNextSongIdx(() => {
            if (currentSongIdx + 1 > songs.length - 1) return 0;
            return currentSongIdx + 1;
        })
    }, [currentSongIdx])



    return (
        <div>
            { <Player
                currentSongIdx={currentSongIdx}
                setCurrentSongIdx={setCurrentSongIdx}
                nextSongIdx={nextSongIdx}
                songs={songs}

            />}
        </div>

    )
}

export default App;
