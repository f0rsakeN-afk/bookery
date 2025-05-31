import React from "react";
import { stripe, cod, esewa } from "@/utils/ImageExports";
import { motion } from "framer-motion";

const paymentMethods = [
  { name: "Stripe", image: stripe },
  { name: "Cash on Delivery", image: cod },
  { name: "eSewa", image: esewa },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const PaymentMethods: React.FC = () => {
  return (
    <div className="py-8 container mx-auto max-w-6xl px-2 xl:px-0">
      <motion.h2
        className="text-3xl font-bold mb-4 font-playfair text-primary/90 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Payment Methods
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-6">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={method.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="flex flex-col items-center justify-center w-40 h-40 border rounded-xl shadow-md p-4 bg-background cursor-pointer"
          >
            <img
              src={method.image}
              alt={method.name}
              loading="lazy"
              className="w-20 h-20 object-contain mb-2"
            />
            <span className="text-center text-sm font-medium font-inter">
              {method.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
