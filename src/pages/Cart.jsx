import { useState } from "react";
import getStore from "../utils/Get";
import "../components/Card.css";

const Cart = () => {
  const [takeBasket, settakeBasket] = useState(getStore("cart"));

  const removeAll = () => {
    localStorage.clear();
  };

  const removeOne = (id) => {
    const newitem = takeBasket.filter((i) => i.id !== id);
    settakeBasket(newitem);
  };

  return (
    <>
      {takeBasket.length > 0 ? (
        <div className="cart-box">
          <button className="delete" onClick={removeAll}>
            Remove all
          </button>
          {takeBasket.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.images[1]} alt="photo" />
              <h2>{item.title}</h2>
              <p>{item.price}$</p>
              <button
                className="cart-remove"
                onClick={() => removeOne(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1>Add something</h1>
      )}
    </>
  );
};

export default Cart;
