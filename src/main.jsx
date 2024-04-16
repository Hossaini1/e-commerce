import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParentContext } from "./store/Context.jsx";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
      <ParentContext>
        
          <App />
        
      </ParentContext>
    </BrowserRouter>
  
);
