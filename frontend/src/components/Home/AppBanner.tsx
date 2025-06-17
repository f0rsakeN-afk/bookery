import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { appBanner } from "@/utils/ImageExports";
import { ClockAlert, Truck } from "lucide-react";

const AppBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative pb-6 max-w-6xl mx-auto"
    >
      <div className="relative rounded-xl overflow-hidden mx-4 sm:mx-2 lg:mx-0">
        <img
          src={appBanner}
          alt="SnapKart App Banner"
          loading="lazy"
          className="w-full object-cover min-h-[330px] xl:min-h-[400px]"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />

        {/* Banner Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-start p-4 md:p-6">
          <div className="text-white max-w-xl space-y-5">
            <h2 className="text-3xl md:text-5xl font-bold font-cursive leading-snug">
              Get the SnapKart App
            </h2>

            <p className="text-sm md:text-lg font-poppins">
              Shop your favorite products anytime, anywhere. Enjoy seamless
              shopping with exclusive app-only offers.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-green-100 rounded-md text-green-600">
                  <Truck className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium  font-inter">
                  Free Delivery
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-teal-100 rounded-md text-teal-600">
                  <ClockAlert className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text font-inter">
                  Limited Time
                </span>
              </div>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 font-inter">
              <Button
                variant="secondary"
                className="bg-white text-black hover:bg-gray-100"
              >
                <FaGooglePlay className="mr-2 h-5 w-5" />
                Get it on Play Store
              </Button>
              <Button
                variant="secondary"
                className="bg-white text-black hover:bg-gray-100"
              >
                <FaApple className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AppBanner;
