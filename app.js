// nested structure

const parent = React.createElement(
  "div",
  { id: "parent" },
  
);

const heading = React.createElement(
  "h1",
  { id: "Zainsubhani" },
  "Hello from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
