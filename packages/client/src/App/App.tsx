/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import * as React from "react";

import Card from "./components/Card";
import { products } from "./constants";

const App: React.FC = () => {
  return (
    <>
      <h1>Admin de Productos</h1>
      <main className="shelf-container">{/* Inserte aquí las tarjetas */}</main>
    </>
  );
};

export default App;
