

import React, { useState, useRef, useEffect } from 'react';
import ContentCard from './ContentCard';

function Player(props) {

  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) { audioElement.current.play(); }
    else { audioElement.current.pause(); }
  });

  const nextLastSong = (frw = true) => {
    if (frw) {
      props.setCurrentSongIdx(() => {
        let temporary = props.currentSongIdx;
        temporary++;

        if (temporary > props.songs.length - 1) temporary = 0;
        return temporary;

      });
    } else {
      props.setCurrentSongIdx(() => {
        let temporary = props.currentSongIdx;
        temporary--;

        if (temporary < 0) temporary = props.songs.length - 1;
        return temporary;
      });
    }
  }


  return (

    <div>
      <audio src={props.songs[props.currentSongIdx].song_src}
        ref={audioElement}></audio>
      <ContentCard
        song={props.songs[props.currentSongIdx]}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        nextLastSong={nextLastSong}
        nextSong={props.songs[props.nextSongIdx].title}
      />
    </div>



  )
}

export default Player;
