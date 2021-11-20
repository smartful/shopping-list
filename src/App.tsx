import React from "react";
import "./App.css";
import Form from "./components/Form";
import ItemsContainer from "./components/ItemsContainer";
import ClearBtn from "./components/ClearBtn";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <Form />
      <ItemsContainer />
      <ClearBtn />
    </div>
  );
};

export default App;
