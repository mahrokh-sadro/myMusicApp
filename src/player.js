

import React from 'react'
import ContentCard from './ContentCard'

function player(props) {
  return (

    <div>
      <audio></audio>
      <ContentCard song={props.song} />
    </div>



  )
}

export default player;
