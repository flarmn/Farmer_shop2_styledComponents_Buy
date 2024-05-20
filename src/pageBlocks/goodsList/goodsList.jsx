import React from "react";

import GoodsCard from "/src/pageBlocks/goodsCards/goodsCard";
import styled from "styled-components";

const StyledGoodList = styled.section`
  width: 75%;
  margin-right: 90px;
  border: 1px #000000;
`;

function GoodsList({ productList }) {
  return (
    <StyledGoodList>
      {productList.map((product, index) => {
        return <GoodsCard key={index} product={product} />;
      })}
    </StyledGoodList>
  );
}

export default GoodsList;
