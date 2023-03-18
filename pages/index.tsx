import ContentStatistic from "@/components/ContentStatistic";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function index() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <ContentStatistic />
      <div className="flex-1 bg-purple-300">c</div>
    </div>
  );
}
