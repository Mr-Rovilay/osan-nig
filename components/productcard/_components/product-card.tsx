"use client"
import React from "react";
import Image from "next/image";

const ProductCard: React.FC<{ title: string; description: string; imageSrc: string; onClick: () => void }> = ({ title, description, imageSrc, onClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative h-56 w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:opacity-75 transition-opacity duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          {description}
        </p>
        <button
          onClick={onClick}
          className="bg-custom-blue text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
