import React from "react";
import FarmerImg from "assets/farmer_about.png";
import styled from "styled-components";

const StyledAboutBlockIllustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  min-width: 360px;
  flex-wrap: wrap;
`;

const StyledBackgroundCircle = styled.div`
  position: absolute;
  width: 47vh;
  height: 47vh;
  background: #c4e2ff;
  border-radius: 50%;
  z-index: 2;
  align-self: center;
`;

const StyledAboutBlockIllustrationImage = styled.img`
  z-index: 3;
`;

function AboutBlockIllustration({ abiWidth, abiHeight, abiBackgr }) {
  return (
    <StyledAboutBlockIllustration
      style={{
        width: abiWidth,
        height: abiHeight,
        background: abiBackgr,
      }}
    >
      <StyledBackgroundCircle />
      <StyledAboutBlockIllustrationImage src={FarmerImg} />
    </StyledAboutBlockIllustration>
  );
}

export default AboutBlockIllustration;
