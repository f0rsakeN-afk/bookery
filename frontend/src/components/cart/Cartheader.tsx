import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CartHeaderProps {
  itemCount: number;
}

const Cartheader = ({ itemCount }: CartHeaderProps) => {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="flex justify-between items-center mb-4"
    >
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2 font-playfair text-primary/90">
          {/*    <Heart className="h-6 w-6" /> */}
          My Cart
        </h1>
      </div>
      <p
        className={cn(
          "text-muted-foreground mt-1 font-inter",
          itemCount === 0 ? "hidden" : "block"
        )}
      >
        {itemCount} items
      </p>
    </motion.div>
  );
};

export default Cartheader;
