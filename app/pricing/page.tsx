"use client";
import React from "react";

const PricingPage = () => {
  const blockProducts = [
    {
      name: "Hollow Blocks",
      price: "₦200 per unit",
      description: "Durable hollow blocks suitable for all types of construction.",
    },
    {
      name: "Solid Blocks",
      price: "₦250 per unit",
      description: "High-strength solid blocks for foundational support.",
    },
    // Add more block products
  ];

  const waterProducts = [
    {
      name: "Bottled Water 50cl",
      price: "₦1050 per pack",
      description: "Clean and safe drinking water in a 50cl bottle.",
    },
    {
      name: "Bottled Water 75cl",
      price: "₦1500 per pack",
      description: "Premium quality water in a convenient 75cl bottle.",
    },
    {
        name: "Sachet Water 75cl",
        price: "₦300 per bag/ 3000 per 10bags",
        description: "Premium quality water in a convenient 75cl bottle.",
      },
      {
        name: "Ice Block",
        price: "₦1000 per pack",
        description: "Premium quality ice for cooling your products.",
      },
      {
        name: "Icing in cold room",
        price: "₦50,000 per service",
        description: "Premium quality water in a convenient 75cl bottle.",
      },
      {
        name: "Dispenser Water",
        price: "₦1500 per 1",
        description: "Premium quality water in a convenient bottle, for safe drinking.",
      },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-custom-blue">Osan Block Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockProducts.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold mb-4">{product.name}</h4>
                <p className="text-lg mb-4">{product.price}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-8 text-custom-blue">Osan Water Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterProducts.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold mb-4">{product.name}</h4>
                <p className="text-lg mb-4">{product.price}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
