import React from "react";
import { useGetDashboardMetricsQuery } from "../state/api";

function CardPopularProducts() {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  console.log(dashboardMetrics);

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">Popular Products</h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map(product => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-3 px-5 py-7 border-b "
              >
                {/* First Column */}
                <div className="flex items-center gap-3">
                  <div>Here will be image</div>
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">{product.name}</div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${product.price}
                      </span>
                      <span className="mx-2">|</span>
                      <div>Here will be rating</div>
                    </div>
                  </div>
                </div>
                {/* Second Column */}
                <div className="flex items-center text-xs">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2"></button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CardPopularProducts;
