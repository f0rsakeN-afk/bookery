import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
/* import { Heart } from "lucide-react"; */
import { useNavigate } from "react-router-dom";
import { empty_wishlist } from "@/utils/ImageExports";

const EmptyWishlist = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 flex flex-col items-center"
    >
      {/* <Heart className="h-16 w-16 mx-auto mb-4  font-inter animate-pulse duration-75 text-red-500" /> */}
      <img src={empty_wishlist} alt="empty-wishlist" className="h-64 p-3" />
      <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
      <p className="text-muted-foreground mb-6">
        Add items you love to your wishlist. Review them anytime and easily move
        them to the cart.
      </p>
      <Button onClick={() => navigate("/")}>Continue Shopping</Button>
    </motion.div>
  );
};

export default EmptyWishlist;
