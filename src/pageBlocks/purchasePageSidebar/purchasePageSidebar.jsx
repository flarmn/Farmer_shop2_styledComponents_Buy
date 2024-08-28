import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CheckBoxList from "primitives/checkBoxList/checkBoxList";
import OrderWidget from "primitives/orderWidget/orderWidget";

const StyledSidebarSection = styled.section`
  width: 20%;
  height: 100vh;
  margin-left: 90px;
`;

function SideBar({ productList }) {
  const [totalPriceValue, setTotalPriceValue] = useState("");

  const exhangeData = (totalPriceValue) => {
    setTotalPriceValue(totalPriceValue);
  };

  return (
    <StyledSidebarSection>
      <CheckBoxList productList={productList} onPriceChanged={exhangeData} />
      <OrderWidget totalPrice={totalPriceValue} />
    </StyledSidebarSection>
  );
}

export default SideBar;
