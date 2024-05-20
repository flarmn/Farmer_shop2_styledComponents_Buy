import React from "react";
import styled from "styled-components";

const StyledAboutTextBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTextBlockWrapper = styled.div`
  width: 80%;
  min-width: 360px;
  margin-left: 90px;
`;

const StyledTextBlockTitle = styled.h1`
  font-family: Inter, Arial;
  font-size: 44px;
  font-weight: 700;
  margin-top: -10px;
`;

const StyledTextBlockTextSection = styled.div`
  font-family: Inter, Arial;
  font-size: 21pt;
  font-weight: 400;
`;

function AboutTextBlock({ atbWidth, atbHeight, atbBackgr }) {
  return (
    <StyledAboutTextBlock
      style={{
        width: atbWidth,
        height: atbHeight,
        background: atbBackgr,
      }}
    >
      <StyledTextBlockWrapper>
        <StyledTextBlockTitle>
          Магазин фермерских продуктов с доставкой
        </StyledTextBlockTitle>
        <StyledTextBlockTextSection>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledTextBlockTextSection>
      </StyledTextBlockWrapper>
    </StyledAboutTextBlock>
  );
}

export default AboutTextBlock;
