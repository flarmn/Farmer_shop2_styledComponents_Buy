import React from "react";
import AdvantagesCard from "pageBlocks/advantagesCard/advantagesCard";
import cardData from "mocks/main_mocks";
import styled from "styled-components";

const StyledCardsGrid = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 4%;
  margin-right: 4%;
  padding: 0;
`;

function CardsGrid({ width, bgColor }) {
  const cardsGridData =
    cardData &&
    cardData.map(
      ({ id, imgPath, heading, headingColor, description, text }) => (
        <AdvantagesCard
          key={id}
          imgPath={imgPath}
          advCardWidth="45%"
          advCardHeight="197px"
          advCardBgColor="#E1EDCE"
          cardTitle={heading}
          titleColor="white"
          titleBackgr={headingColor}
          cardDescription={description}
          cardText={text}
        />
      )
    );

  return (
    <StyledCardsGrid style={{ width, backgroundColor: bgColor }}>
      {cardsGridData}
    </StyledCardsGrid>
  );
}

export default CardsGrid;
