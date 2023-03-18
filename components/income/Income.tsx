import React from "react";

function Income() {
  return (
    <div className="h-[190px] w-[320px] rounded-md bg-[#fefefe] shadow-lg transition duration-300 hover:cursor-pointer hover:bg-primary hover:text-white hover:shadow-lg">
      <div className="px-6 pt-6 pb-5 space-y-3">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-gray-01">Income</h1>
          <span className="text-base text-gray-03">Today</span>
        </div>
        <hr
          style={{
            color: "white",
            width: "272px",
          }}
          className="my-1"
        />
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">$ 9460.00</h1>
          <span className="text-2xl text-red-500">↓1.5%</span>
        </div>
        <div>
          <span className="text-sm text-gray-02">
            Compared to $9940 yesterday
          </span>
        </div>
        <div className="flex items-center justify-between -space-x-2 text-sm text-gray-01">
          <h1>Last week Income</h1>
          <span>$25658.00</span>
        </div>
      </div>
    </div>
  );
}

export default Income;
