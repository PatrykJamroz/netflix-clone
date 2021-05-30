import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./global-styles";

import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyDAU60M2FDHNsYt9uGMpRezw3FGVIX6Jrs",
  authDomain: "netflix-c8ae9.firebaseapp.com",
  databaseURL: "https://netflix-c8ae9.firebaseio.com",
  projectId: "netflix-c8ae9",
  storageBucket: "netflix-c8ae9.appspot.com",
  messagingSenderId: "590575805931",
  appId: "1:590575805931:web:f809092b6cd55306fa25ae",
};

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
