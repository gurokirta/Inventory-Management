import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetail = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dataRange: string;
};

function StatCard({ title, primaryIcon, details, dataRange }: StatCardProps) {
  const formatPercentage = (value: number) => {
    const sign = value > 0 ? "+" : "";
    return `${sign}${value.toFixed()}%`;
  };

  const changeColor = (value: number) =>
    value >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="md:row-span-1 xl:row-span-2 bg-white shadow-md rounded-2xl col-span-1 flex flex-col justify-between">
      {/* HEADER */}
      <div>
        <div className="flex justify-between items-center mb-2 px-5 pt-4">
          <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
          <span className="text-xs text-gray-400">{dataRange}</span>
        </div>
        <hr />
      </div>
      {/* BODY */}
      <div className="flex justify-around items-center mb-6 gap-4 px-5">
        <div className="rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-between items-center my-4">
                <span className="text-gray-500">{detail.title}</span>
                <span className="font-bold text-gray-800">{detail.amount}</span>
                <div className="flex items-center">
                  <detail.IconComponent
                    className={`h-4 w-4 mr-1 ${changeColor(
                      detail.changePercentage
                    )}`}
                  />
                  <span
                    className={`font-medium ${changeColor(detail.changePercentage)}`}
                  >
                    {formatPercentage(detail.changePercentage)}
                  </span>
                </div>
              </div>
              {index < details.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
