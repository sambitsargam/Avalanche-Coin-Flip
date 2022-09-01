import React from "react";
import ReactDOM from "react-dom";
import { Dapp } from "./components/Dapp";
import './index.css'
import "bootstrap/dist/css/bootstrap.css";

// This is the entry point, it renders the Dapp
// react component. All of the logic is contained in it.
ReactDOM.render(
  <React.StrictMode>
    <div>
      <Dapp />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
