import React, { useState } from 'react';
import './App.css';
import npc from '@yatiac/name-that-color'

const App = () => {

  const [ColorState, setColorState] = useState({})

  return (
    <div>
      
      <header>
          <h1 className="overlay">Name That Color</h1>
      </header>

      <label htmlFor="color-picker">Escoge un color: </label>
      <input id="color-picker" type="color" onChange={event => setColorState(npc(event.target.value))} />
      <label>{ColorState.colorName}</label>
      <label>{ColorState.exactMatch ? 'Exacto' : 'No exacto'}</label>
      <label>{ColorState.closestColor}</label>
    </div>
  )
}





export default App;
