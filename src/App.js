import "./App.scss";

// React Router V6
import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./components/pageComponents/Home/Home";
import { AboutPage } from "./components/pageComponents/AboutPage/AboutPage";
import { FaqPage } from "./components/pageComponents/FaqPage/FaqPage";
import { ReviewsPage } from "./components/pageComponents/ReviewsPage/ReviewsPage";
import { Navbar } from "./components/generalComoponents/Navbar/Navbar";
import { Footer } from "./components/generalComoponents/Footer/Footer";
import { ErrorPage } from "./components/pageComponents/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
