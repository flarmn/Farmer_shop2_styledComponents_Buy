import React from "react";
import styled from "styled-components";

const StyledCardTabButton = styled.button.attrs((props) => ({
  type: "button",
}))`
  margin-right: 10px;
  border: none;
  padding: 8px 12px 8px 12px;
`;

function CardTabButton({
  button_bgColor,
  button_textColor,
  button_width,
  button_height,
  children,
  onClick,
}) {
  return (
    <StyledCardTabButton
      style={{
        width: button_width,
        height: button_height,
        background: button_bgColor,
        color: button_textColor,
      }}
      onClick={onClick}
    >
      {children}
    </StyledCardTabButton>
  );
}

export default CardTabButton;
