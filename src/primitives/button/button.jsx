import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
  type: "button",
}))`
  margin-right: 90px;
  font-size: 18px;
  font-weight: 700;
  border: none;

  &:hover {
    border-top: solid 5px #00000024;
  }

  &:active {
    background: #fc7427 !important;
    border: none;
  }
`;

function Button({
  button_bgColor,
  button_textColor,
  button_width,
  button_height,
  children,
}) {
  return (
    <StyledButton
      style={{
        width: button_width,
        height: button_height,
        background: button_bgColor,
        color: button_textColor,
      }}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
