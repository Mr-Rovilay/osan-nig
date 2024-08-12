"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Osan Blocks exceeded our expectations with their durability and design. A top choice for any builder.",
      author: "Sarah Thompson, Real Estate Developer",
    },
    {
      text: "I've never seen such high-quality blocks. Osan Blocks truly sets the standard in the industry.",
      author: "James Anderson, Civil Engineer",
    },
    {
      text: "The precision and consistency of Osan Blocks have streamlined our entire construction process.",
      author: "Emily Carter, Project Manager",
    },
    {
      text: "Working with Osan Blocks has reduced our material costs while improving the overall quality of our projects.",
      author: "William Lee, Construction Foreman",
    },
    {
      text: "Osan Blocks’ eco-friendly materials have been a game-changer for our sustainable building initiatives.",
      author: "Olivia Brown, Environmental Consultant",
    },
    {
      text: "The versatility of Osan Blocks allows us to be more creative with our designs, without compromising on strength.",
      author: "David Wilson, Architect",
    },
  ];

  const fastDuration = 55;
  const slowDuration = 95;
  const [duration, setDuration] = useState(fastDuration);
  const [mustFinish, setMustFinish] = useState(false);
  const [reRender, setReRender] = useState(false);

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width * (testimonials.length / 2);

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setReRender(!reRender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, reRender, testimonials.length]);

  return (
    <section className="bg-white dark:bg-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto text-center cursor-pointer">
        <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-10">
          What Our Customers Say
        </h2>
        <motion.div
          className="flex space-x-8"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(slowDuration);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(fastDuration);
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg"
            >
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-4 text-sm text-custom-blue font-semibold">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
