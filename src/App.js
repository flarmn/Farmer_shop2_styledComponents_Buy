import { BrowserRouter, Routes, Route } from "react-router-dom";

import FarmerShop from "/src/fullPage/farmerShop";
import FarmerPurchasePage from "/src/fullPage/farmerShop_Purchase_Page";
import { productList } from "/src/mocks/goods_mock";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FarmerShop />} />
          <Route
            path="/buy"
            element={<FarmerPurchasePage productList={productList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
