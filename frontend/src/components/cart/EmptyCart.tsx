import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "@/utils/ImageExports";
import { Button } from "../ui/button";

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center py-16 font-inter text-center"
    >
      <motion.img
        src={emptyCart}
        alt="Empty Cart"
        loading="lazy"
        className="w-44 h-44 mb-4"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      />
      <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-2">
        Start adding items to your cart to make a purchase.
      </p>
      <Button onClick={() => navigate("/")}>Browse products</Button>
    </motion.div>
  );
};

export default EmptyCart;
