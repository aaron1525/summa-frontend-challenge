/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import * as React from "react";

import image1 from "../assets/product1.webp";
import image2 from "../assets/product2.webp";
import image3 from "../assets/product3.webp";

import { products } from "./constants";
import CardList from "./components/CardList";

type product = {
  id: number;
  name: string;
  description: string;
  price: number;
};
type impression = {
  id: string;
  impressions: number;
};

const App: React.FC = () => {
  const [impressions, setImpressions] = React.useState<Array<impression>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [keepFetching, setKeepFetching] = React.useState<number>(0);
  const images = [image1, image2, image3];

  const fetchProduct = async (id: number) => {
    const options = { method: "GET" };
    const response = await fetch(
      "http://localhost:8000/status/" + String(id),
      options
    );
    const data = await response.json();

    return data;
  };

  const fetchProducts = (products: Array<product>) => {
    console.log(keepFetching);

    const promesas = products.map((product: product) => {
      return fetchProduct(product.id);
    });

    Promise.all(promesas)
      .then((resultados) => {
        setImpressions(resultados);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  React.useEffect(
    () => {
      handleClick();
    } /* eslint-disable-line */,
    []
  );

  const handleClick = () => {
    if (keepFetching) {
      clearInterval(keepFetching);
      setKeepFetching(0);

      return;
    }

    const newIntervalId = setInterval(() => fetchProducts(products), 5000);

    setKeepFetching(newIntervalId);
  };

  return (
    <>
      <h1>Admin de Productos</h1>
      <main className="shelf-container">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <CardList
            handleClick={handleClick}
            images={images}
            impressions={impressions}
            products={products}
          />
        )}
      </main>
    </>
  );
};

export default App;
