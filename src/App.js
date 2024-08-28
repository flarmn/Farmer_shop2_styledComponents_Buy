import { BrowserRouter, Routes, Route } from "react-router-dom";

import FarmerShop from "fullPage/farmerShop";
import FarmerPurchasePage from "fullPage/farmerShop_Purchase_Page";
import { productList } from "mocks/goods_mock.js";

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
