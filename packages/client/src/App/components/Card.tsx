/* eslint-disable prettier/prettier */
import * as React from "react";

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

const Card: React.FC<{
  impression: impression;
  product: product;
  image: any;
  handleClick: any;
}> = ({ impression, product, image, handleClick }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClickCard = () => {
    handleClick();
    setIsOpen(!isOpen);
  };

  return (
    <div className="card" onClick={handleClickCard}>
      <div className="card-header">
        <div className="title">{product.name}</div>
      </div>

      <div className="card-content">
        <img alt="Jean" className="picture" src={image} />

        {isOpen && (
          <div>
            <p className="product-status">
              ✨ Interés en el producto: {impression.impressions}% ✨
            </p>
            <p className="product-description">{product.description}</p>
            <h2 className="product-price">$ {product.price}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
