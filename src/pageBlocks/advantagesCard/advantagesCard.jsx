import React from "react";
import styled from "styled-components";
//import "./style.css";

const StyledAdvantagesCardWraper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const StyledAdvantagesCardHeading = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
`;

const StyledAdvantagesCardIconWraper = styled.div`
  width: 52px;
  height: 52px;
  margin-right: 30px;
`;

const StyledAdvantagesCardHeadingTitlesWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledAdvantagesCardItemTitle = styled.h4`
  margin: 0;
  padding: 2px 10px 2px 10px !important;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const StyledAdvantagesCardItemDescription = styled.p`
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

const StyledAdvantagesCardItemTextWraper = styled.div`
  display: flex;
  height: 100%;
`;

const StyledAdvantagesCardItemText = styled.p`
  font-family: Inter, Sans-serif, Arial;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  margin-top: 27px;
`;

function AdvantagesCard({
  advCardWidth,
  advCardHeight,
  advCardBgColor,
  cardTitle,
  cardDescription,
  cardText,
  titleColor,
  titleBackgr,
  imgPath,
}) {
  return (
    <StyledAdvantagesCardWraper
      style={{
        width: advCardWidth,
        height: advCardHeight,
        backgroundColor: advCardBgColor,
      }}
    >
      <StyledAdvantagesCardHeading>
        <StyledAdvantagesCardIconWraper>
          <img src={imgPath} />
        </StyledAdvantagesCardIconWraper>

        <StyledAdvantagesCardHeadingTitlesWraper>
          <StyledAdvantagesCardItemTitle
            style={{ color: titleColor, backgroundColor: titleBackgr }}
          >
            {cardTitle}
          </StyledAdvantagesCardItemTitle>
          <StyledAdvantagesCardItemDescription>
            {cardDescription}
          </StyledAdvantagesCardItemDescription>
        </StyledAdvantagesCardHeadingTitlesWraper>
      </StyledAdvantagesCardHeading>

      <StyledAdvantagesCardItemTextWraper>
        <StyledAdvantagesCardItemText>{cardText}</StyledAdvantagesCardItemText>
      </StyledAdvantagesCardItemTextWraper>
    </StyledAdvantagesCardWraper>
  );
}

export default AdvantagesCard;
