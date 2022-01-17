/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import * as React from "react";

import image1 from "../assets/product1.webp";
import image2 from "../assets/product2.webp";
import image3 from "../assets/product3.webp";

import { products } from "./constants";
import Card from "./components/Card";
import fetchProduct from "./services/ProductService";

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
  const opens = [false, false, false];

  const fetchProducts = (products: Array<product>) => {
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
      handleClick(false, 1);
    } /* eslint-disable-line */,
    []
  );

  const handleClick = (isOpen: boolean, index: number) => {
    opens[index] = isOpen;
    if (keepFetching && opens.some((e) => e)) {
      clearInterval(keepFetching);
      setKeepFetching(0);

      return;
    }
    if (opens.every((e) => e === false)) {
      const newIntervalId = setInterval(() => fetchProducts(products), 5000);

      setKeepFetching(newIntervalId);
    }
  };

  return (
    <>
      <h1>Admin de Productos</h1>
      <main className="shelf-container">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          products.map((item: product, index: number) => {
            return (
              <Card
                key={index}
                handleClick={handleClick}
                image={images[index]}
                impression={impressions[index]}
                product={item}
              />
            );
          })
        )}
      </main>
    </>
  );
};

export default App;
