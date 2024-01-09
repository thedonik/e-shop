import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import Liked from "./pages/Liked";
import ShareLayout from "./components/ShareLayout";
import Signup from "./pages/Signup";
import AddCard from "./components/Addcard";
import SinglePage from "./components/SinglePage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<AddCard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/single-product/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
