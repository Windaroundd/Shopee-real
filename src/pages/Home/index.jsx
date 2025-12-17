import React from "react";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import FlashSale from "../../components/FlashSale";
import ShopeeMall from "../../components/ShopeeMall";
import TopItem from "../../components/TopItem";
import TodaySuggest from "../../components/TodaySuggest";

const index = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FlashSale />
      <ShopeeMall />
      <TopItem />
      <TodaySuggest />
    </div>
  );
};

export default index;
