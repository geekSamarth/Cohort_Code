import { useNotification } from "../context/NotificationContext";

function About() {
  const { count, addNotification } = useNotification();
  return (
    <div>
      <h2>We are on about us page</h2>
      <h1>{count}</h1>
      <button onClick={addNotification}>Add more notifications</button>
    </div>
  );
}

export default About;
