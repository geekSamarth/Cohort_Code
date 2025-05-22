const Chai = (props) => {
  console.log(props);
  
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.cost),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Chai Variations by Chaicode"),
    React.createElement(Chai, {
      name: "Masala Chai",
      cost: "100",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
