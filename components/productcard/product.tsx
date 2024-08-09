"use client"

import ProductCard from "./_components/product-card";



const ProductsSection = () => {
  const products = [
    {
      title: "Solid Blocks",
      description: "High-quality solid blocks for durable construction.",
      imageSrc: "/images/solid-blocks.jpg",
    },
    {
      title: "Hollow Blocks",
      description: "Lightweight and strong hollow blocks for versatile uses.",
      imageSrc: "/images/hollow-blocks.jpg",
    },
    {
      title: "Paving Stones",
      description: "Stylish paving stones to enhance your outdoor spaces.",
      imageSrc: "/images/paving-stones.jpg",
    },
  ];

const handleLearnMore = (productTitle: string) => {
    alert(`Learn more about ${productTitle}`);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-10">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              onClick={() => handleLearnMore(product.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
