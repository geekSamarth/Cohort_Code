import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load"));
  }, []);

  return (
    <div>
      <h1>Welcome to Chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
    </div>
  );
}
