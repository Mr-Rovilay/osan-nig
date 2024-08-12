"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  onClick,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer flex flex-col justify-between h-full">
      <div className="flex-grow">
        <div className="relative h-56 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
            className="object-cover hover:opacity-75 transition-opacity duration-300"
          />
        </div>
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 flex-grow mb-5 line-clamp-7">
            {description}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Button text="Learn More" onClick={onClick} variant="secondary" />
      </div>
    </div>
  );
};

export default ProductCard;
