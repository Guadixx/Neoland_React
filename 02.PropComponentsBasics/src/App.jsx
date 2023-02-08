import './App.css'
import Title from './Components/Title/Title'
import Subtitle from './Components/Subtitle/Subtitle'
import Paragraph from './Components/Paragraph/Paragraph'
import Image from './Components/Image/Image'

function App() {
  const title = "Mi titulo"
  const subtitle = "Mi subtitulo"
  const paraph = "Mi parrafo"
  const imageAlt = "Pastor Belga"
  const image = "https://res.cloudinary.com/dpidlverd/image/upload/v1675883536/replica/jjprvtebdr15bpjixedd.jpg"
  return (
    <div className="App">
      <Title text={title} />
      <Subtitle sub={subtitle} />
      <Paragraph para={paraph} />
      <Image source={image}
              alt={imageAlt} />
    </div>
  )
}

export default App
