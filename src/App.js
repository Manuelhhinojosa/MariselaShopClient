import "./App.scss";

// React Router V6
import { Routes, Route } from "react-router-dom";

// components

import { Home } from "./components/pageComponents/Home/Home";

function App() {
  return (
    <div className="appContainer">
      <div className="navbar">navbar</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
