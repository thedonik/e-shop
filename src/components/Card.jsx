import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, title, price, img, category }) => {
  return (
    <div className="single-box">
      <Link className="single-card" to={`/single-product/${id}`}>
        <img src={img} alt="product img" />
        <h2>{title}</h2>
        <p className="card-price">{price}$</p>
        <p className="card-category">{category}</p>
      </Link>
    </div>
  );
};

export default Card;
