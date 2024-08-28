import React from "react";
import Logo from "primitives/logo/logo";
import Button from "primitives/button/button";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px 0px #0000000a;
  box-shadow: 0px 2px 6px 0px #0000000a;
  box-shadow: 0px 10px 20px 0px #0000000a;
`;

function Header({ bgColor, width, height }) {
  return (
    <StyledHeader
      style={{ backgroundColor: bgColor ? bgColor : "#d0d6db", width, height }}
    >
      <Logo
        width=""
        height=""
        bgColor="transparent"
        logoText="Фермерские продукты"
        logoTextColor="#333333"
        logoTextBgColor="transparent"
        imgBgColor=""
        imgWidth="44px"
        imgHeight="44px"
      />
      <nav>
        <Link to="/buy">
          <Button
            button_width="260px"
            button_height="60px"
            button_bgColor="#FC9B27"
            button_textColor="white"
          >
            Купить
          </Button>
        </Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
