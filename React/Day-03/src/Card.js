import './Card.css';


function Card(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}


export default Card;