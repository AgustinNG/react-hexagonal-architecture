import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GetUserAction } from "./application/get-user";
import { ApiRestRepository } from "./infra/repository/ApiRestRepository";
import reportWebVitals from "./reportWebVitals";

const getUserAction = new GetUserAction(new ApiRestRepository());

ReactDOM.render(
  <React.StrictMode>
    <App getUserAction={getUserAction} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
