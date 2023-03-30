import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { initializeApp } from "firebase/app";

//Configuracion de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCJaP-1uGUq4lvezt8JLjxVZGpMhNMAHNo",
    authDomain: "proyecto-react-coder-b2d15.firebaseapp.com",
    projectId: "proyecto-react-coder-b2d15",
    storageBucket: "proyecto-react-coder-b2d15.appspot.com",
    messagingSenderId: "765589710135",
    appId: "1:765589710135:web:5eebc30afcc4b88f6766b2"
  };

  initializeApp(firebaseConfig);
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
