import "./App.css";

// React Router V6
import { Routes, Route } from "react-router-dom";

// components

import { Home } from "./components/pageComponents/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
