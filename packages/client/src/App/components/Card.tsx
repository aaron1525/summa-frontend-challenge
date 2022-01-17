/* eslint-disable prettier/prettier */
import * as React from "react";

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="title">{/* Inserte aquí el nombre del producto */}</div>
      </div>

      <div className="card-content">
        <img alt="Jean" className="picture" />

        <div>
          <p className="product-status">
            ✨ Interés en el producto:{" "}
            {/* Inserte aquí las impresiones del producto */}% ✨
          </p>
          <p className="product-description">
            {/* Inserte aquí la descripción del producto */}
          </p>
          <h2 className="product-price">
            $ {/* Inserte aquí el precio del producto */}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
