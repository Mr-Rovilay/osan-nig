"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    {
      name: "Solid Blocks",
      price: "₦250 per unit",
      description: "High-strength solid blocks for foundational support.",
    },
    {
      name: "Solid Blocks",
      price: "₦250 per unit",
      description: "High-strength solid blocks for foundational support.",
    },
    {
      name: "Solid Blocks",
      price: "₦250 per unit",
      description: "High-strength solid blocks for foundational support.",
    },
    {
      name: "Solid Blocks",
      price: "₦250 per unit",
      description: "High-strength solid blocks for foundational support.",
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
      price: "₦300 per bag / ₦3000 per 10 bags",
      description: "Affordable sachet water for easy hydration.",
    },
    {
      name: "Ice Block",
      price: "₦1000 per pack",
      description: "Premium quality ice for cooling your products.",
    },
    {
      name: "Icing in Cold Room",
      price: "₦50,000 per service",
      description: "High-capacity cold room icing services for bulk storage.",
    },
    {
      name: "Dispenser Water",
      price: "₦1500 per bottle",
      description: "Convenient bottled water for dispensers.",
    },
    {
      name: "Dispenser Water",
      price: "₦1500 per bottle",
      description: "Convenient bottled water for dispensers.",
    },
    {
      name: "Dispenser Water",
      price: "₦1500 per bottle",
      description: "Convenient bottled water for dispensers.",
    },
    {
      name: "Dispenser Water",
      price: "₦1500 per bottle",
      description: "Convenient bottled water for dispensers.",
    },
  ];

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="container mx-auto"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-300 mb-12">
          Our Products
        </motion.h2>
        <motion.p
  variants={productVariants}
  className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
>
  Explore our diverse range of products designed to meet your construction and hydration needs. Whether you're building a sturdy foundation with our high-quality blocks or ensuring your team stays refreshed with our premium water products, we provide reliable solutions that combine durability, affordability, and convenience. Discover the perfect products to bring your projects to life.
</motion.p>

        <motion.div variants={sectionVariants} className="mb-16">
          <motion.h3
            variants={productVariants}
            className="text-3xl font-semibold mb-8 text-custom-blue"
          >
            Osan Block Products
          </motion.h3>
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blockProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={productVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {product.name}
                </h4>
                <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                  {product.price}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <motion.h3
            variants={productVariants}
            className="text-3xl font-semibold mb-8 text-custom-blue"
          >
            Osan Water Products
          </motion.h3>
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {waterProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={productVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {product.name}
                </h4>
                <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                  {product.price}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingPage;
