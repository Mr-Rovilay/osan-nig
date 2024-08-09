"use client"

import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-10">
          What Our Customers Say
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
<p className="text-lg text-gray-600 dark:text-gray-300">
              "Osan Blocks transformed our construction process. Highly recommended!"
            </p>
            <p className="mt-4 text-sm text-custom-blue font-semibold">- John Doe, Contractor</p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Osan Blocks transformed our construction process. Highly recommended!"
            </p>
            <p className="mt-4 text-sm text-custom-blue font-semibold">- John Doe, Contractor</p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Osan Blocks transformed our construction process. Highly recommended! &quot"
            </p>
            <p className="mt-4 text-sm text-custom-blue font-semibold">- John Doe, Contractor</p>
          </div>
          {/* Add more testimonials as needed */}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
