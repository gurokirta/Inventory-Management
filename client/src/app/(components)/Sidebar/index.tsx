import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="flex justify-between md:justify-normal gap-3 items-center pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">Inventory Management</h1>
      </div>
    </div>
  );
}
