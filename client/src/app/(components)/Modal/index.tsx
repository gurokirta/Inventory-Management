import React, { FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../Header";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type ModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  func: (formData: ProductFormData) => void;
};

function Modal({ isModalOpen, func, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });
  if (!isModalOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    func(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const labelCSS = "block text-sm font-medium text-gray-700";
  const inputCSS = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form
          onSubmit={handleSubmit}
          className="mt-5"
        >
          {/* Product name */}
          <label
            htmlFor="productsName"
            className={labelCSS}
          >
            Product Name
          </label>
          <input
            type="text"
            className={inputCSS}
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          {/* Product price */}
          <label
            htmlFor="productsPrice"
            className={labelCSS}
          >
            Product Price
          </label>
          <input
            type="number"
            className={inputCSS}
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={formData.price}
            required
          />
          {/* Product quantity */}
          <label
            htmlFor="stockQuantity"
            className={labelCSS}
          >
            Product Quantity
          </label>
          <input
            type="number"
            className={inputCSS}
            name="stockQuantity"
            placeholder="Stock Quantity"
            onChange={handleChange}
            value={formData.stockQuantity}
            required
          />
          {/* Product Rating */}
          <label
            htmlFor="rating"
            className={labelCSS}
          >
            Product Rating
          </label>
          <input
            type="number"
            className={inputCSS}
            name="rating"
            placeholder="Product Rating"
            onChange={handleChange}
            value={formData.rating}
            required
          />
          {/* Buttons */}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Create
          </button>
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
