import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainProductsPage from "./pages/MainProductsPage";
import Header from "./components/header";
import FooterSection from "./components/footer";
import SingleProductsPage from "./pages/SingleProudctsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tienda" element={<MainProductsPage />} />
          <Route path="/single-page" element={<SingleProductsPage />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
