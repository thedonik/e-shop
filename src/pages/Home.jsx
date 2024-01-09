import Card from "../components/Card";
import { useGlobalContext } from "../context";

const Home = () => {
  const { products } = useGlobalContext();

  return (
    // <h1>hello</h1>
    <>
      {products.length > 0 ? (
        <div className="cards">
          {products.slice(0, 20).map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.images[1]}
              category={product.category.name}
            />
          ))}
        </div>
      ) : (
        <h1>Loding...</h1>
      )}
    </>
  );
};

export default Home;
