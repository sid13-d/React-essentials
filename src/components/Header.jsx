import reactImg from "../assets/react-core-concepts.png";
import './Header.css';
const reactDescription = ["Core", "Essentials", "Fundamentals"];

function generateRandome() {
  return Math.floor(Math.random() * reactDescription.length);
}


export default function Header() {
    //good practices
    const putText = reactDescription[generateRandome()];
    return (
      <header>
        {/* putting the image path directly is not good practice */}
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {putText} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }