import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import getStore from "../utils/Get";
// import { useGlobalContext } from "../context";

const SinglePage = () => {
  const { id } = useParams();
  const [cart, setCart] = useState(getStore("cart"));
  const [single, setSingle] = useState(null);

  const singleFetch = async () => {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      setSingle(await data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (id) => {
    if (id) {
      return setCart([...cart, single]);
    }
  };

  console.log(single);

  useEffect(() => {
    singleFetch();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      {single ? (
        <div key={single.id} className="single-product">
          <img src={single.images[1]} alt="photo" />
          <div className="single-content">
            <h2>{single.title}</h2>
            <p className="single-price">{single.price}$</p>
            <p className="single-desc">{single.description}</p>
            <p className="single-cate">{single.category.name}</p>
            <br />
            <button onClick={() => addToCart(id)} to="/cart">
              <FaShoppingCart className="single-icon" />
            </button>
          </div>
        </div>
      ) : (
        <h1>Loding...</h1>
      )}
    </>
  );
};

export default SinglePage;
