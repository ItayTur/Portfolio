import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BallCanvas } from "./canvas";
import Section from "./Section";
import { Sections, technologies } from "@/consts";

const Tech = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 2000); // Change icon every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTech = technologies[currentIndex];

  return (
    <Section idName={Sections.Tech}>
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0"
            >
              <BallCanvas icon={currentTech.icon} />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
            {currentTech.name}
          </h3>
        </motion.div>
        <div className="flex gap-2 mt-6">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-8 bg-[#915EFF]"
                : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              aria-label={`Go to ${technologies[index].name}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tech;
