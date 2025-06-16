import { cn } from "@/lib/utils";
import { motion } from "motion/react";
/* import { Heart } from "lucide-react"; */

interface WishlistHeaderProps {
  itemCount: number;
}

const WishlistHeader = ({ itemCount }: WishlistHeaderProps) => {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="flex justify-between items-center mb-4"
    >
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2 font-playfair text-primary/90">
          {/*    <Heart className="h-6 w-6" /> */}
          My Wishlist
        </h1>
      </div>
      <p
        className={cn(
          "text-muted-foreground mt-1 font-inter",
          itemCount === 0 ? "hidden" : "block"
        )}
      >
        {itemCount} {itemCount === 1 ? "item" : "items"}
      </p>
    </motion.div>
  );
};

export default WishlistHeader;
