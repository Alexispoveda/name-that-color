import React, { useState } from 'react';
import './App.css';
import npc from '@yatiac/name-that-color';
import githubIcon from './icons/github.svg'
import instagramIcon from './icons/instagram.svg'
import linkedinIcon from './icons/linkedin.svg'
import whatsappIcon from './icons/whatsapp.svg'
import gmailIcon from './icons/gmail.svg'

const App = () => {

  const [ColorState, setColorState] = useState({
    colorName:'Black',
    exactMatch: true,
    closestColor: '#000000',
    colorCode: '#000000'
  })

  const onColorChange = event =>
    setColorState({
      colorName: npc(event.target.value).colorName,
      exactMatch: npc(event.target.value).exactMatch,
      closestColor: npc(event.target.value).closestColor,
      colorCode: event.target.value
    })

  return (
    <div className="App">
      
      <header>
        <h1 className="overlay">Name That Color</h1>
      </header>

      <div className="Box">
        <label htmlFor="color-picker"><b>Escoge un color: </b></label>
        <input id="color-picker" type="color" onChange={onColorChange} />
      </div>

      <div className="Container">
        <div className="ColorBox" style={{backgroundColor:ColorState.colorCode}}>
          <label><b>COLOR</b></label>
          <label>{ColorState.colorCode.toUpperCase()}</label>
          {ColorState.exactMatch ? <label>{ColorState.colorName.toUpperCase()}</label> : null}
        </div>

        {ColorState.exactMatch ? null 
        : 
          <div className="ColorBox" style={{backgroundColor:ColorState.closestColor}}>
            <label><b>COLOR MÁS CERCANO</b></label>
            <label>{ColorState.closestColor}</label>
            <label>{ColorState.colorName.toUpperCase()}</label>
          </div>}
      </div>

      <footer>
        <div className="Container">
          <p>Copyright © Alexis Poveda</p>
          <p>Thanks for passing by!</p>
          <a href="https://github.com/alexispoveda" target="blank_"><img src={githubIcon} alt="githubIcon" width="25vw"/></a>
          <a href="https://instagram.com/alexispoveda" target="blank_"><img src={instagramIcon} alt="instagramIcon" width="25vw"/></a>
          <a href="https://web.whatsapp.com/send?phone=50769988521" target="blank_"><img src={whatsappIcon} alt="whatsappIcon" width="25vw"/></a>
          <a href="mailto:alexispoveda97@gmail.com"><img src={gmailIcon} alt="gmailIcon" width="25vw"/></a>
          <a href="https://linkedin.com/in/alexispoveda" target="blank_"><img src={linkedinIcon} alt="linkedinIcon" width="25vw"/></a>
        </div>
      </footer>
    </div>
  )
}





export default App;
