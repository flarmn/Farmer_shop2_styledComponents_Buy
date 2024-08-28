import React, { useState } from "react";
import styled from "styled-components";
import CustomCheckBox from "primitives/customCheckBox/customCheckBox";

const StyledCheckBoxListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 20px;
  border: 1px solid #0000001a;
  box-shadow: 0px 0px 1px 0px #0000000a;
  box-shadow: 0px 2px 6px 0px #0000000a;
  box-shadow: 0px 10px 20px 0px #0000000a;
`;

const StyledCheckBoxListOption = styled.li`
  display: flex;
  justify-content: space-between;
  color: #333333;
  font-family: "Inter", "sans-serif", "Arial";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  height: 56px;
`;

const StyledListTitle = styled.h4`
  font-family: "Inter", "sans-serif", "Arial";
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #333333;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

function CheckBoxList({ productList, onPriceChanged }) {
  let [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (event) => {
    let checkedPrice = Number(
      productList[event.target.getAttribute("idx")].tabs[0].price
    );
    if (event.target.checked) {
      setTotalPrice((totalPrice += checkedPrice));
    } else {
      totalPrice >= 0 ? setTotalPrice((totalPrice -= checkedPrice)) : false;
    }
    onPriceChanged(totalPrice);
  };

  return (
    <StyledCheckBoxListWrapper>
      <StyledListTitle>Выберите продукты</StyledListTitle>
      {productList.map((product, index) => {
        return (
          <StyledCheckBoxListOption key={index}>
            <span>{product.title}</span>
            <CustomCheckBox
              name={product.title}
              onChange={handleChange}
              idx={index}
            />
          </StyledCheckBoxListOption>
        );
      })}
    </StyledCheckBoxListWrapper>
  );
}

export default CheckBoxList;
