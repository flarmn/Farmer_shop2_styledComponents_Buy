import React from "react";
import styled from "styled-components";

const StyledCopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: Inter, Arial, Helvetica, sans-serif, monospace;
  font-weight: 400;
  line-height: 27px;
  color: #333333;
`;

const StyledcopyRightDate = styled.span`
  margin-left: 5px;
  margin-right: 90px;
`;

const StyledcopyRightText = styled.p`
  width: auto;
`;

function Copyright({ copyrightText, copyrightDate }) {
  return (
    <StyledCopyrightContainer>
      <StyledcopyRightText>{copyrightText}</StyledcopyRightText>
      <StyledcopyRightDate>{copyrightDate}</StyledcopyRightDate>
    </StyledCopyrightContainer>
  );
}

export default Copyright;
