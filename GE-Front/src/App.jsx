import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainProductsPage from "./pages/MainProductsPage";
import Layout from "./components/layout";
import BrandsUsageCards from "./components/BrandsUsageCards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tienda" element={<MainProductsPage />} />
          <Route path="/card-prueba" element={<BrandsUsageCards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
