import "./App.css";
import About from "./components/about";
import { useNotification } from "./context/NotificationContext";

function App() {
  const { count, addNotification, resetNotification } = useNotification();
  return (
    <div>
      <h2>Chai and Context API</h2>
      <span>{count}</span>
      <button onClick={addNotification}>Add Notification</button>

      <button onClick={resetNotification}>Reset Notifications</button>
      <About/>
    </div>
  );
}

export default App;
