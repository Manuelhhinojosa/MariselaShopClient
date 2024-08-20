import "./App.scss";

// React Router V6
import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./components/pageComponents/Home/Home";
import { Navbar } from "./components/generalComoponents/Navbar/Navbar";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="footer"></div>
    </div>
  );
}

export default App;
