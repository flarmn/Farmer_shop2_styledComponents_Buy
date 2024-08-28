import React from "react";
import Header from "pageSections/header/header";
import Main from "pageSections/main/main";
import Footer from "pageSections/footer/footer";

function FarmerShopMain() {
  return (
    <div className="page-var1">
      <Header bgColor="white" width="100%" height="80px" />
      <Main bgColor="green" width="100%" height="auto" />
      <Footer bgColor="white" width="100%" height="80px" />
    </div>
  );
}

export default FarmerShopMain;
