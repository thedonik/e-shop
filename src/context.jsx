import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import getStore from "./utils/Get";
import { uid } from "uid";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [users, setUsers] = useState(getStore("users"));

  const id = uid();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: id, name: name };
    setUsers([...users, newItem]);
    navigate("/");
    setName("");
  };
  console.log(users);

  const fetched = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(await data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetched();
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        name,
        setName,
        users,
        setUsers,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
