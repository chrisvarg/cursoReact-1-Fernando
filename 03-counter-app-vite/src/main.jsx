import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./style.css";
import { CounterApp } from "./CounterApp";
import { CounterApp2 } from "./CounterApp2";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <CounterApp value={ 20 } />
    {/* <FirstApp title="Hola, soy David" /> */}
  </React.StrictMode>
);
