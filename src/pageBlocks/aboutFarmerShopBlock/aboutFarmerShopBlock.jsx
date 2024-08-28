import React from "react";
import AboutTextBlock from "primitives/about_block_text/about_block_text";
import AboutBlockIllustration from "primitives/about_block_illustration/about_block_illustration";
import styled from "styled-components";

const StyleAboutFarmerShopBlock = styled.section`
  display: flex;
`;

function AboutFarmerShopBlock({ a_width, a_height, abgColor }) {
  return (
    <StyleAboutFarmerShopBlock
      style={{ width: a_width, height: a_height, background: abgColor }}
    >
      <AboutTextBlock atbWidth="50%" atbHeight="" atbBackgr="" />
      <AboutBlockIllustration abiWidth="50%" abiHeight="" abiBackgr="" />
    </StyleAboutFarmerShopBlock>
  );
}

export default AboutFarmerShopBlock;
