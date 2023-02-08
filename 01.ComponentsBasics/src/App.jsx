
import './App.css'
import Title from './Components/Title/Title';
import Image from './Components/Image/Image';
import Subtitle from './Components/Subtitle/Subtitle';
import Paragraph from './Components/Paragraph/Paragraph';

function App() {
  const title = "Welcome to ReactJs";
  const image = "https://res.cloudinary.com/dpidlverd/image/upload/v1675672700/replica/188918_fvlogm.png";
  const imageTitle = "Pokemon";
  return (
    <div className="App">
      <Title text={title} />
      <Subtitle/>
      <Paragraph/>
      <Image source ={image} title={imageTitle}/>
    </div>
  );
};

export default App;
