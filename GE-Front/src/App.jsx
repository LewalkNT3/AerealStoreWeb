import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainProductsPage from "./pages/MainProductsPage";
import Header from "./components/header";
import FooterSection from "./components/footer";
import SingleProductsPage from "./pages/SingleProudctsPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tienda" element={<MainProductsPage />} />
          <Route path="/products/:id" element={<SingleProductsPage />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
