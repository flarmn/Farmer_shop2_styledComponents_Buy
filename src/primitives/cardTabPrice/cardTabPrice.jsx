import React from "react";
import styled from "styled-components";

const StyledCardTabPrice = styled.span`
  display: flex;
  background: #d8ecfe;
  padding: 4px 8px 4px 8px;
  margin-top: 10px;
  width: fit-content;
`;

function CardTabPrice({ price, weight }) {
  return (
    <StyledCardTabPrice className="card-tab-price">
      {price} руб. / {weight} гр.{" "}
    </StyledCardTabPrice>
  );
}

export default CardTabPrice;
