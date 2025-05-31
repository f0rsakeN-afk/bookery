import React from "react";
import { motion } from "motion/react";
import { about2Image, aboutImage } from "@/utils/ImageExports";

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div initial="initial" animate="animate" className=" select-none">
      <motion.section
        className="overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.1 }}
          src={aboutImage}
          loading="lazy"
          alt="about image"
          className="object-cover h-[250px] w-full brightness-50"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-white text-2xl font-bold capitalize"
        >
          About US
        </motion.h1>
      </motion.section>

      <motion.div
        variants={staggerContainer}
        className="container mx-auto max-w-6xl px-2 xl:px-0 grid lg:grid-cols-5 gap-4 py-6"
      >
        <motion.div
          variants={staggerContainer}
          className="lg:col-span-3 flex flex-col space-y-6"
        >
          <motion.section
            variants={fadeInUp}
            className="flex flex-col space-y-1"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-2xl font-semibold"
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-inter font-extralight"
            >
              Our mission is to make online shopping simple, accessible, and
              enjoyable for everyone. We strive to offer a diverse range of
              quality products that cater to every need and lifestyle — all
              while delivering exceptional value, convenience, and customer
              satisfaction.
            </motion.p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            className="flex flex-col space-y-1"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-2xl font-semibold"
            >
              What We Are
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-inter font-extralight"
            >
              We're not just an online store; we're a vibrant community of
              shoppers, trendsetters, and everyday heroes who value quality,
              convenience, and choice. We believe great products have the power
              to enhance your life — from the essentials to the extraordinary.
            </motion.p>
            <br />
            <motion.p
              variants={fadeInUp}
              className="font-inter font-extralight"
            >
              We take pride in offering a thoughtfully curated range of items
              that cater to all styles, needs, and interests. Whether you're
              upgrading your home, refreshing your wardrobe, or looking for the
              perfect gift, we're here to be your trusted destination. Join us
              in celebrating smart shopping and everyday inspiration. Welcome to
              SnapKart, where quality meets convenience, and customers come
              first.
            </motion.p>
          </motion.section>
        </motion.div>

        <motion.img
          loading="lazy"
          variants={scaleIn}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={about2Image}
          alt="about 2 image"
          className="order-first lg:order-last lg:col-span-2 border-8 border-primary h-full rounded"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
