import React from 'react'
import Navbar from "../components/Navbar.jsx"
import CharacterBox from '../components/CharacterBox.jsx'
import "./Character.css"

const Character = () => {
  return (
    <>
    <img id='cbg' src="/assets/image/cbg.jpg" alt="CharacterPage-Background" />
    <Navbar/>
    <div className='container' id="character-section">
        <CharacterBox bg="bg1" name='SWAYAM' path="/assets/image/char/swayam.jpg"/>
        <CharacterBox bg="bg2" name='RACHIT' path="/assets/image/char/rachit.jpg"/>
        <CharacterBox bg="bg3" name='GAURAV' path="/assets/image/char/gaurav.jpg"/>
        <CharacterBox bg="bg4" name='AVIRAL' path="/assets/image/char/aviral.jpg"/>
        <CharacterBox bg="bg5" name='ANSHIKA' path="/assets/image/char/anshika.jpg"/>
        <CharacterBox bg="bg6" name='YUGETSU' path="/assets/image/char/yugetsu.jpg"/>
        <CharacterBox bg="bg7" name='REINHARD' path="/assets/image/char/reinhard.jpg"/>
        <CharacterBox bg="bg8" name='ABHISHRAAP' path="/assets/image/char/abhishraap.jpg"/>
        <CharacterBox bg="bg9" name='SCAR' path="/assets/image/char/scar.jpg"/>
        <CharacterBox bg="bg10" name='KAAL' path="/assets/image/char/kaal.jpg"/>
        <CharacterBox bg="bg11" name='LILITH' path="/assets/image/char/lilith.jpg"/>
        <CharacterBox bg="bg12" name='NYSS' path="/assets/image/char/nyss.jpg"/>
    </div>
    </>
  )
}

export default Character
