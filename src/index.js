import React from "react";
import ReactDOM from "react-dom/client";

// styles
import "./index.css";

// App Component
import App from "./App";

// React Router V6
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
