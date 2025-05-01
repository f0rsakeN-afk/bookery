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
      <p className="text-muted-foreground mt-1 font-inter">{itemCount} items</p>
    </motion.div>
  );
};

export default WishlistHeader;
