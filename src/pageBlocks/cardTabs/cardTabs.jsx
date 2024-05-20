import React, { useState } from "react";
import styled from "styled-components";
import CardTabButton from "/src/primitives/cardTabButton/cardTabButton";
import CardTabText from "/src/primitives/cardsTabText/cardsTabText";
import CardTabPrice from "/src/primitives/cardTabPrice/cardTabPrice";

const StyledCardTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  margin-bottom: 80px;
`;

const StyledCharacterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function CardTabs({ tabsdata }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledCardTabs
      style={activeTab > 0 ? { height: 50 + "%" } : { height: 84 + "%" }}
    >
      <nav>
        {tabsdata.map((tab, index) => {
          return (
            <CardTabButton
              button_bgColor={activeTab === index ? "#88AA4D" : "#F6F6F6"}
              button_textColor={activeTab === index ? "white" : "#333333"}
              onClick={() => {
                setActiveTab(index);
              }}
              key={index}
            >
              {tab.tabName}
            </CardTabButton>
          );
        })}
      </nav>
      {tabsdata.map((tab, index) => {
        return (
          <div key={index}>
            {(activeTab === index && tab.description) ||
              (activeTab === index && (
                <CardTabText key={index}>
                  <StyledCharacterList
                    className="characteristics-list"
                    key={index}
                  >
                    {Object.keys(tab.characteristics || tab.properties).map(
                      (item, index) => {
                        return (
                          <li key={index}>
                            <b>
                              {tab.characteristics
                                ? tab.characteristics[item].catName
                                : tab.properties
                                ? tab.properties[item].catName
                                : false}
                              :{" "}
                            </b>
                            {tab.characteristics
                              ? tab.characteristics[item].catValue
                              : tab.properties
                              ? tab.properties[item].catValue
                              : false}
                          </li>
                        );
                      }
                    )}
                  </StyledCharacterList>
                </CardTabText>
              ))}
            {activeTab === index && tab.description ? (
              <CardTabPrice price={tab.price} weight={tab.weight} key={index} />
            ) : (
              false
            )}
          </div>
        );
      })}
    </StyledCardTabs>
  );
}

export default CardTabs;
