import '../App.css';

function Card({ image, name }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="name">{name}</div>
    </div>
  );
}

export default Card;
