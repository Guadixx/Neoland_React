import { useState } from 'react'
import './App.css'
import DigitalClock from './Components/RelojDigital/RelojDigital'
import CountDown from './Components/CountDown/CountDown'
import Stopwatch from './Components/Cronometro/Cronometro'


function App() {
  return (
    <div className="App">
      <DigitalClock/>
      <CountDown />
      <Stopwatch/>
    </div>
  )
}

export default App
