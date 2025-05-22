const App = () => {
  return React.createElement(
    "div",
    {class:"test"},
    React.createElement("h1", {}, "chaicode web dev cohort- react course")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
