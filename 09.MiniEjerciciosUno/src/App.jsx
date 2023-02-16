import { useEffect, useState } from 'react'
import './App.css'


function App() {
const [characterList, setCharacterList] = useState([]);
useEffect(() => {
  (async () => {
    let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
      (res) => res.json()
    );

    setCharacterList(data.results);
  })();
}, []);

  return (
    <div className="App">
      <h1>Hello React!</h1>
        <div>
            {characterList.map((character) => 
              (<div key= {character.id}>
                <h2>id: {character.id}</h2>
                <h2>name: {character.name}</h2>
                <h2>status: {character.status}</h2>
                <h2>origin: {character.origin.name}</h2>
                <img src={character.image} />
              </div>)
            )}
        </div>
    </div>
  )
}

export default App
