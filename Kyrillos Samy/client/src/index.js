import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import drizzle functions and contract artifact
import { Drizzle, generateStore } from "@drizzle/store";
import Addition from "../src/build/contracts/Addition.json";

// let drizzle know what contracts we want
const options = { contracts: [Addition] };

// setup the drizzle store and drizzle
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App drizzle={drizzle} />
  </React.StrictMode>
);
