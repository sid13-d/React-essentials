import './CoreConcept.css';

export default function CoreConcept( {title, description, image}) {
    return (
  
      <li>
        <img src={image} alt="..."></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }