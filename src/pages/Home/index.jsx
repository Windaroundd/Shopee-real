import React from "react";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import FlashSale from "../../components/FlashSale";
import ShopeeMall from "../../components/ShopeeMall";
import TopItem from "../../components/TopItem";
import TodaySuggest from "../../components/TodaySuggest";
import Slider from "../../components/Swiper/Swiper";

const index = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <Category />
      <FlashSale />
      <ShopeeMall />
      <TopItem />
      <TodaySuggest />
    </div>
  );
};

export default index;
