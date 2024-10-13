"use client";

import React, { useState } from "react";
import { useGetProductsQuery, useCreateProductMutation } from "@/app/state/api";
import { PlusCircle, SearchIcon } from "lucide-react";
import Header from "@/app/(components)/Header";
import Rating from "@/app/(components)/Rating";
import Modal from "@/app/(components)/Modal";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: products, isError, isLoading } = useGetProductsQuery(searchTerm);
  const [createProduct] = useCreateProductMutation();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="py-4 text-center text-red-500">Failed to fetch products</div>
    );
  }

  const handleCreateProduct = async (productData: ProductFormData) => {
    await createProduct(productData);
  };

  return (
    <div className="w-full mx-auto pb-5">
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 m-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search products"
            className="w-full py-2 px-4 rounded bg-white"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* Header bar */}
      <div className="flex justify-between items-center mb-6">
        <Header name="Products" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircle className="w-5 h-5 mr-2 !text-gray-200" />
          Create Product
        </button>
      </div>
      {/* Body Products list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          products?.map(product => (
            <div
              key={product.productId}
              className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
            >
              <div className="flex flex-col items-center">
                img
                <h3 className="text-lg text-gray-900 font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-800">${product.price.toFixed(2)}</p>
                <div className="text-sm text-gray-600 mt-1">
                  Stock: {product.stockQuantity}
                </div>
                {product.rating && (
                  <div className="flex items-center mt-2">
                    <Rating rating={product.rating} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      {/* MODAL */}
      <Modal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        func={handleCreateProduct}
      />
    </div>
  );
}

export default Products;
