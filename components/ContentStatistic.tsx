import React from "react";
import Header from "./header/Header";
import Income from "./income/Income";
import Expences from "./expences/Expences";

function ContentStatistic() {
  return (
    <div className="flex-col flex-none mt-8 mb-4 mx-7 w-80">
      <Header />
      <Income />
      <Expences />
    </div>
  );
}

export default ContentStatistic;
