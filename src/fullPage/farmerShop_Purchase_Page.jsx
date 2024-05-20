import React from "react";
import Header from "/src/pageSections/header/header";
import Purchase_Page_Main from "/src/pageSections/main/purchase_page_main";
import Footer from "/src/pageSections/footer/footer";
import styled from "styled-components";

const StyledPurchasePageWraper = styled.div`
  background: #f6f6f6;
`;

function FarmerPurchasePage({ productList }) {
  return (
    <StyledPurchasePageWraper className="purchase-page-wraper">
      <Header bgColor="white" width="100%" height="80px" />
      {<Purchase_Page_Main />}
      <Footer bgColor="white" width="100%" height="80px" />
    </StyledPurchasePageWraper>
  );
}

export default FarmerPurchasePage;
