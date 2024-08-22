import "./App.scss";

// React Router V6
import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./components/pageComponents/Home/Home";
import { Navbar } from "./components/generalComoponents/Navbar/Navbar";
import { Footer } from "./components/generalComoponents/Footer/Footer";
import { ErrorPage } from "./components/pageComponents/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
