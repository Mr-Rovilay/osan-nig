"use client"
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-300 mb-12">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          className="p-8 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-custom-blue mb-4">Premium Quality</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our blocks are made from the highest quality materials to ensure durability and strength.
          </p>
        </motion.div>
        <motion.div
          className="p-8 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-custom-blue mb-4">Affordable Prices</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get the best value for your money with competitive pricing on all our products.
          </p>
        </motion.div>
        <motion.div
          className="p-8 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-custom-blue mb-4">Eco-Friendly Materials</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We are committed to sustainable practices, using materials that are friendly to the environment.
          </p>
        </motion.div>
        <motion.div
          className="p-8 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-custom-blue mb-4">Customer Satisfaction</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our customers love our products, and we strive to keep it that way with excellent service.
          </p>
        </motion.div>
        <motion.div
          className="p-8 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-custom-blue mb-4">Fast Delivery</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our customers love our products, and we strive to keep it that way with excellent service and very fast delivery.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
