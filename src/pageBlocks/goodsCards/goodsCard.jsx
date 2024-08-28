import React from "react";

import styled from "styled-components";
import CardTitle from "primitives/cardTitle/cardTitle";
import CardTabs from "pageBlocks/cardTabs/cardTabs";

const StyledGoodsCard = styled.div`
  display: flex;
  width: 97%;
  background: white;
  padding: 20px;
  border: solid 1px lightgrey;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const StyledCardImage = styled.img`
  width: 248px;
  height: 248px;
  background: rgb(246, 246, 246);
`;

const StyledCardInfoSection = styled.div`
  display: block;
  margin-left: 20px;
  width: 100%;
`;

function goodsCard({ product }) {
  return (
    <StyledGoodsCard className="goodsCard">
      <StyledCardImage src={product.cardImage} />
      <StyledCardInfoSection className="goodsCard-info-section">
        <CardTitle>{product.title}</CardTitle>
        <CardTabs tabsdata={product.tabs} />
      </StyledCardInfoSection>
    </StyledGoodsCard>
  );
}

export default goodsCard;
