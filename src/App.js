import "./App.scss";

// production state
import data from "../src/assets/data/data";

// React Router V6
import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./components/pageComponents/Home/Home";
import { Shop } from "./components/pageComponents/Shop/Shop";
import { SingleProduct } from "./components/pageComponents/SingleProduct/SingleProduct";
import { AboutPage } from "./components/pageComponents/AboutPage/AboutPage";
import { FaqPage } from "./components/pageComponents/FaqPage/FaqPage";
import { ReviewsPage } from "./components/pageComponents/ReviewsPage/ReviewsPage";
import { Contact } from "./components/pageComponents/Contact/Contact";
import { Navbar } from "./components/generalComoponents/Navbar/Navbar";
import { Footer } from "./components/generalComoponents/Footer/Footer";
import { ErrorPage } from "./components/pageComponents/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        {data.jArr.map((prod) => (
          <Route
            key={prod.id}
            path={`/shop/${prod.id}`}
            element={<SingleProduct />}
          />
        ))}

        {data.printsArr.map((prod) => (
          <Route
            key={prod.id}
            path={`/shop/${prod.id}`}
            element={<SingleProduct />}
          />
        ))}

        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
