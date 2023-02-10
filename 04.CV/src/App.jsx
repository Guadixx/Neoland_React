import { useState } from 'react'
import './App.css'
import { CV } from './CV/CV'
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Education from "./Components/Education/Education"
import More from "./Components/More/More"
const {hero, education, experience , languages, habilities} = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About aboutMe={hero.aboutMe} />
      <button 
      className="btn-education"
      onClick={() => setShowEducation(true)} 
      >
      Education
      </button>
      <button 
      className="btn-education"
      onClick={() => setShowEducation(false)}
      >
      Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
      languages={languages}
      habilities={habilities}/>
    </div>
  )
}

export default App
