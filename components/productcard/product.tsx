"use client";

import ProductCard from "./_components/product-card";

const ProductsSection = () => {
  const products = [
    {
      title: "Fast Delivery Blocks",
      description: "Get your projects started faster with our fast delivery blocks. These premium blocks are delivered promptly to ensure your construction timeline stays on track without compromising quality or durability.",
      imageSrc: "/trailerblock.webp",
    },
    {
      title: "Fancy Blocks",
      description: "Upgrade your designs with our fancy blocks, perfect for adding a stylish touch to any project. These blocks combine aesthetic appeal with structural integrity, making them an excellent choice for both residential and commercial buildings.",
      imageSrc: "/fancy.webp",
    },
    {
      title: "Developer",
      description: "Our developer blocks are tailored for large-scale projects, offering unmatched strength and reliability. These blocks are designed to meet the rigorous demands of high-end construction, ensuring your projects stand tall and last long.",
      imageSrc: "/developer.jpg",
    },
    {
      title: "Interlocking Bricks",
      description: "Enhance the stability and efficiency of your construction with our interlocking bricks. These bricks lock together seamlessly, providing a secure fit without the need for mortar, making your building process faster and more reliable.",
      imageSrc: "/interlock.webp",
    },
    {
      title: "Cements",
      description: "Our premium cement products ensure that your projects are built to last. Known for their exceptional strength and versatility, they provide the perfect foundation for any construction endeavor, from small renovations to large-scale developments.",
      imageSrc: "/Dangote-Cement-stack.webp",
    },
    {
      title: "Concrete Blocks",
      description: "Our concrete blocks are the cornerstone of sturdy, reliable construction. Engineered for durability and strength, these blocks are ideal for both load-bearing and non-load-bearing applications, ensuring your structures are solid from the ground up.",
      imageSrc: "/9-inches-blocks.jpg",
    },
    {
      title: "Red Blocks",
      description: "Bring a vibrant touch to your construction with our red blocks. Perfect for both interior and exterior use, these blocks combine the rich color of red clay with the durability needed for long-lasting structures.",
      imageSrc: "/fancyred.webp",
    },
    {
      title: "Sand/Stone Supplier",
      description: "Ensure your construction materials are top-notch with our premium sand and stone supply. Ideal for all types of building needs, our high-quality aggregates ensure a strong foundation and enduring construction.",
      imageSrc: "/traler.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
