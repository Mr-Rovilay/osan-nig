import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <header className="container relative py-12 xl:py-24 h-[auto] text-center lg:text-left lg:flex lg:items-center lg:justify-between bg-cover bg-center" 
      style={{ backgroundImage: "url('/worker.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* left */}
      <motion.div
        className="lg:w-1/2 xl:py-14 lg:py-8 z-10 relative"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Join Our Team at Osan Industries
        </h1>
        <p className="text-base lg:text-lg text-white">
At Osan Industries, we&apos;re committed to building a future where
          innovation meets quality. Explore our current job openings and see how
          you can contribute to our growing success.
        </p>
      </motion.div>
      {/* right */}
      <motion.div
        className="relative lg:w-1/2 mt-8 lg:mt-0 z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/work.jpg"
          fill
          alt="Worker at Osan Industries"
          sizes="(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw"
          className="right-0 top-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] rounded-xl object-cover hidden lg:block"
        />
      </motion.div>
    </header>
  );
};

export default HeaderSection;
