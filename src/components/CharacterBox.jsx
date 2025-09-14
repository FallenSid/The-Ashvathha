import React from 'react'
import "./CharacterBox.css"
const CharacterBox = (props) => {
  return (
    <div className='box'>
        <img id={props.bg} class="character-img" src={props.path} alt={props.name} />
        <p>{props.name}</p>
    </div>
  )
}

export default CharacterBox
