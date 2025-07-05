"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const Products = () => {
  const [products, setProducts] = useState([]);

  const truncate = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-2xl font-semibold mb-4">Productos Destacados</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product: Product) => (
          <div key={product.title} className="bg-white shadow-md rounded-xl overflow-hidden p-4 hover:shadow-lg transition">
            <div className="w-full h-48 relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 space-y-1">
              <h2 className="text-lg font-semibold">
                {truncate(product.title, 20)}
              </h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-green-600 font-bold text-md">
                ${product.price}
              </p>
              <p className="text-yellow-500 text-sm">
                {"⭐".repeat(Math.round(product.rating.rate))}{" "}
                <span className="text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </p>
              <p className="text-sm text-gray-600">
                {truncate(product.description, 40)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
