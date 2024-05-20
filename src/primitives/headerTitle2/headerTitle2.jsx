import React from "react";
import styled from "styled-components";

const StyledHeaderTitle2 = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  font-family: Inter, Sans-serif, Arial;
  padding-top: 30px;
  padding-bottom: 15px;
`;

function HeaderTitle2({ textColor, textBackground, children }) {
  return (
    <StyledHeaderTitle2
      style={{
        color: textColor ? textColor : "black",
        backgroundColor: textBackground ? textBackground : "transparent",
      }}
    >
      {children}
    </StyledHeaderTitle2>
  );
}

export default HeaderTitle2;
