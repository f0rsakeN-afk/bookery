import { motion } from "motion/react";
import WishlistHeader from "@/components/wishlist/WishlistHeader";
import WishlistTable from "@/components/wishlist/WishlistItems";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      inStock: true,
    },
    {
      id: 2,
      title: "The Great Gatsbyc  cdsv",
      author: "F. Scott Fitzgerald",
      price: 19.99,
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      inStock: true,
    },
    // Add more items...
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-6xl px-4 xl:px-0 xl:py-8"
    >
      <WishlistHeader itemCount={wishlistItems.length} />
      {wishlistItems.length > 0 ? (
        <WishlistTable items={wishlistItems} />
      ) : (
        <EmptyWishlist />
      )}
    </motion.div>
  );
};

export default Wishlist;
