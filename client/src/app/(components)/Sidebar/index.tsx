"use client";
import { Menu } from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="flex justify-between md:justify-normal gap-3 items-center pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">
          <span className="text-red-700">G</span>Stocks
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 hover:bg-blue-100 rounded-full"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-grow mt-8"></div>
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2024 G Stocks</p>
      </div>
    </div>
  );
}
