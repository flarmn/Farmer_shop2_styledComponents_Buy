import React from "react";
import AboutFarmerShopBlock from "pageBlocks/aboutFarmerShopBlock/aboutFarmerShopBlock";
import AdvantagesBlock from "pageBlocks/advantagesBlock/advantagesBlock";
import styled from "styled-components";

const StyledMain = styled.main`
  display: inline;
`;

function Main({ bgColor, width, height }) {
  return (
    <StyledMain
      style={{ backgroundColor: bgColor ? bgColor : "#d0d6db", width, height }}
    >
      <AboutFarmerShopBlock
        abgColor="#D8ECFE"
        a_width="100%"
        a_height="600px"
      />
      <AdvantagesBlock advWidth="100%" advHeight="" advBackgrColor="white" />
    </StyledMain>
  );
}

export default Main;
