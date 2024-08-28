import React from "react";
import { Link } from "react-router-dom";
import HeaderTitle2 from "primitives/headerTitle2/headerTitle2";
import CardsGrid from "pageBlocks/cardsGrid/cardsGrid";
import Button from "primitives/button/button";

function AdvantagesBlock({ advWidth, advHeight, advBackgrColor }) {
  return (
    <section
      style={{ width: advWidth, height: advHeight, background: advBackgrColor }}
    >
      <HeaderTitle2 textColor="#333333">
        Почему фермерские продукты лучше?
      </HeaderTitle2>
      <CardsGrid width="auto" bgColor="" />
      <div
        className="button-container"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
      </div>
    </section>
  );
}

export default AdvantagesBlock;
