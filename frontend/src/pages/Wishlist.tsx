import { motion } from "motion/react";
import WishlistHeader from "@/components/wishlist/WishlistHeader";
import WishlistTable from "@/components/wishlist/WishlistItems";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import { useGetWishlist } from "@/services/wishlist";
import { Button } from "@/components/ui/button";
import WishlistTableSkeleton from "@/components/wishlist/WishListLoader";

const Wishlist = () => {
  const { data: wishListData, isLoading, isError, refetch } = useGetWishlist();

  if (isLoading) return <WishlistTableSkeleton />;
  /*   console.log(wishListData); */

  if (isError)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center px-4 py-12 text-center"
      >
        <p className="text-sm text-muted-foreground font-medium font-inter mb-4">
          Oops! We couldn't load your wishlist. Please try again.
        </p>
        <Button onClick={() => refetch()}>Retry</Button>
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-6xl px-4 xl:px-0 xl:py-8"
    >
      <WishlistHeader itemCount={wishListData.results} />
      {wishListData.results > 0 ? (
        <WishlistTable items={wishListData.data} />
      ) : (
        <EmptyWishlist />
      )}
    </motion.div>
  );
};

export default Wishlist;
