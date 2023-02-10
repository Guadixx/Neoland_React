import './App.css'
import Title from './Components/Title/Title'
import Subtitle from './Components/Subtitle/Subtitle'
import Paragraph from './Components/Paragraph/Paragraph'
import Image from './Components/Image/Image'
import Button from './Components/Button/Button'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {
  const title = "Mi titulo"
  const subtitle = "La boluda de mi suegra"
  const paraph = `A la boluda de mi suegra, 
    le dedico un poema,
   lo buena que soy con las letras, 
   lo soy con la metralleta`
  const imageAlt = "Pastor Belga"
  const image = "https://res.cloudinary.com/dpidlverd/image/upload/v1675883536/replica/jjprvtebdr15bpjixedd.jpg"
  return (
    <div className="App">
      <Title text={title} />
      <Subtitle sub={subtitle} />
      <Paragraph para={paraph} />
      <Image source={image}
              alt={imageAlt} />
      <Button>Haz click aquí</Button>
      <Header>el desquicie que me generan estos Holandeses degenerados, si no pongo una bomba es un milagro</Header>
      <Main>
      </Main>
    </div>
  )
}

export default App
