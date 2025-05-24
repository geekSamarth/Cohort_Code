import { useState, useEffect } from "react";

export const AllMeals = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data.data);
        setProduct(data.data.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div>
      <h2>All Meals</h2>
      <ul>
        {product.map((item) => (
          <li key={item.id}>{item.strArea} </li>
        ))}
      </ul>
    </div>
  );
};
