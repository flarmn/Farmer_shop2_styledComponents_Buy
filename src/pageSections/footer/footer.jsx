import React from "react";
import Logo from "primitives/logo/logo";
import Copyright from "primitives/copyright/copyright";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px lightgrey;
`;

function Footer({ bgColor, width, height }) {
  return (
    <StyledFooter
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
      <Copyright copyrightText="Создано" copyrightDate="2021" />
    </StyledFooter>
  );
}

export default Footer;
