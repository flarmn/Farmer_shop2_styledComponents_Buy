import React, { useState } from "react";
import styled from "styled-components";
import Button from "/src/primitives/button/button";

const StyledOrderWidgetWrapper = styled.div`
  display: block;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #0000001a;
  box-shadow: 0px 0px 1px 0px #0000000a;
  box-shadow: 0px 2px 6px 0px #0000000a;
  box-shadow: 0px 10px 20px 0px #0000000a;
`;

const StyledOrderWidgetTitle = styled.h4`
  font-family: "Inter", "sans-serif", "Arial";
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #333333;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

const StyledTextInput = styled.input`
  height: 48px;
  width: 96%;
  background: #f6f6f6;
  border: 1px solid #0000001a;
  padding-left: 10px;
  color: #333333;
`;

const StyledPriceLabel = styled.div`
  margin-top: 20px;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #333333;
`;

const StyledPriceOutput = styled.div`
  margin-top: 10px;
  font-family: "Inter";
  font-size: 24px;
  font-weight: 700;
  line-height: 31.2px;
  margin-bottom: 30px;
`;

function OrderWidget({ totalPrice }) {
  return (
    <StyledOrderWidgetWrapper className="order-widget-wrapper">
      <StyledOrderWidgetTitle>Сделать заказ</StyledOrderWidgetTitle>
      <StyledTextInput
        type="text"
        placeholder="Ведите адрес доставки"
        name="deliveryAddress"
      />
      <StyledPriceLabel>Цена</StyledPriceLabel>
      <StyledPriceOutput>{totalPrice ? totalPrice : 0} руб</StyledPriceOutput>
      <Button
        button_width="100%"
        button_height="60px"
        button_bgColor="#FC9B27"
        button_textColor="white"
      >
        Купить
      </Button>
    </StyledOrderWidgetWrapper>
  );
}

export default OrderWidget;
