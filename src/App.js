

import { useState } from 'react';
import './player.js';
const [songs, setSongs] = useState([
    {
        artist: "aaa",
        title: "song1",
        img_src: "./images/1.jpg",
        song_src: "./songs/1.mp3"
    },
    {
        artist: "aaa",
        title: "song1",
        img_src: "./images/1.jpg",
        song_src: "./songs/1.mp3"
    }, {
        artist: "bb",
        title: "song2",
        img_src: "./images/2.jpg",
        song_src: "./songs/2.mp3"
    }, {
        artist: "cc",
        title: "song3",
        img_src: "./images/3.jpg",
        song_src: "./songs/3.mp3"
    },
])

const [currentSongIdx, setCurrentSongIdx] = useState(0);
const [nextSongIdx, setNextSongIdx] = useState(currentSongIdx + 1);


function App() {
    return (
        <Player
            song={songs[currentSongIdx]}
            nextSong={songs[nextSongIdx]}

        />
    )
}

export default App;
