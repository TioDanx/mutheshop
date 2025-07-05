import React from "react";
import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
export default function Home() {
  return (
    <div className="p-4 min-h-[calc(100dvh+10rem)] bg-secondary">
      <Carousel />
      
      <Products /> 
    </div>
  );
}
