import { useState } from "react";
import "./addCard.css";
import { useEffect } from "react";

const AddCard = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const posting = async () => {
    fetch("https://api.escuelajs.co/api/v1/products/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: price,
        category: category,
        description: desc,
        immages: [img],
      }),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  };
  useEffect(() => {
    posting();
  }, []);

  return (
    <div className="add-card">
      <h2>Add your product</h2>
      <form action="">
        <input
          type="text"
          placeholder="Enter product name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter product categorie"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter product description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="file"
          placeholder="Enter product image"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddCard;
