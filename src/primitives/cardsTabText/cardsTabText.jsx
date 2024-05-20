import React from "react";
import styled from "styled-components";

const StyledCardsTabText = styled.div`
  font-weight: 400;
  font-family: "Inter";
  font-size: 14px;
  margin-top: 10px;
  line-height: 21px;
  width: 80%;
`;

function CardsTabText({ children }) {
  return <StyledCardsTabText>{children}</StyledCardsTabText>;
}

export default CardsTabText;
