/* eslint-disable prettier/prettier */
import * as React from "react";

import Card from "./Card";
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

const CardList: React.FC<{
  impressions: Array<impression>;
  products: Array<product>;
  images: Array<string>;
  handleClick: any;
}> = ({ impressions, products, images, handleClick }) => {
  return (
    <>
      {products.map((item: product, index: number) => {
        return (
          <Card
            key={index}
            handleClick={handleClick}
            image={images[index]}
            impression={impressions[index]}
            product={item}
          />
        );
      })}
    </>
  );
};

export default CardList;
