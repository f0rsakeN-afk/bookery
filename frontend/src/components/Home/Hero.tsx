import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CircleArrowDown } from "lucide-react";
import {
  HeroImage,
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
} from "@/utils/ImageExports";
import IconTile from "../Footer/IconTile";

const images: string[] = [
  HeroImage,
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scrollToBooks = () => {
  const section = document.getElementById("electronics");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="container mx-auto max-w-6xl px-2 xl:px-0 py-10 md:py-20 select-none"
    >
      <div className="grid xl:grid-cols-2 gap-2">
        <motion.div
          variants={staggerChildren}
          className="flex justify-center space-y-4 md:space-y-8 flex-col"
        >
          <motion.section
            variants={fadeInUp}
            className="md:!leading-tight opacity-90"
          >
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-playfair text-5xl md:text-6xl text-primary font-bold"
            >
              Best Place to Discover
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-playfair text-5xl md:text-6xl text-primary font-bold"
            >
              Your Favourite
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-playfair text-5xl md:text-6xl text-primary font-bold"
            >
              Products.
            </motion.h1>
          </motion.section>

          <motion.p
            variants={fadeInUp}
            className="font-inter font-extralight tracking-wide leading-6 text-[18px]"
          >
            Discover endless possibilities with our online store! From everyday
            essentials to unique finds, we've got something for everyone. Start
            shopping now and explore products that match your lifestyle.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[125px] ring-1 ring-textgray ring-opacity-80 flex flex-row rounded py-3 px-4 text-lg opacity-75 font-MyFont font-semibold"
            onClick={scrollToBooks}
          >
            Browse
            <CircleArrowDown className="transition-all ease-in-out ml-3 mt-2 scale-110 animate-bounce" />
          </motion.button>

          <motion.div variants={fadeInUp}>
            <IconTile />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden order-first xl:order-last"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="hero image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-h-full max-w-full object-contain rounded-lg contrast-125 saturate-150 "
              whileHover={{ scale: 1.02 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="pt-3 flex items-center gap-3 font-inter font-extralight"
      >
        {["Fast Delivery", "Exclusive Deals", "Curated Collections"].map(
          (text, index) => (
            <motion.div
              key={text}
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {index > 0 && <span className="mx-3">|</span>}
              <h3>{text}</h3>
            </motion.div>
          )
        )}
      </motion.section>
    </motion.div>
  );
};

export default Hero;
