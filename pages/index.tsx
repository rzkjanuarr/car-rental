import Sidebar from "@/components/Sidebar";
import React from "react";

export default function index() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidebar/>
      <div className="w-80 flex-none">b</div>
      <div className="flex-1 bg-purple-300">c</div>
    </div>
  );
}
