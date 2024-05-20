import React from "react";
import SideBar from "/src/pageBlocks/purchasePageSidebar/purchasePageSidebar";
import GoodsList from "/src/pageBlocks/goodsList/goodsList";
import styled from "styled-components";
import { productList } from "/src/mocks/goods_mock";

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-top: 40px;
`;

function FarmerPurchasePage() {
  return (
    <StyledMain>
      <SideBar productList={productList} />
      <GoodsList productList={productList} />
    </StyledMain>
  );
}

export default FarmerPurchasePage;
