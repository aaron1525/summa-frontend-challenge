// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchProduct = async (id: number) => {
  const options = {method: "GET"};
  const response = await fetch("http://localhost:8000/status/" + String(id), options);
  const data = await response.json();

  return data;
};

export default fetchProduct;
