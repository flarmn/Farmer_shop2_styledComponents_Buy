import React from "react";
import styled from "styled-components";

const StyledCardTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  font-family: "Inter", Arial, "Sans-serif";
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

function CardTitle({ children }) {
  return <StyledCardTitle className="card-title">{children}</StyledCardTitle>;
}

export default CardTitle;
