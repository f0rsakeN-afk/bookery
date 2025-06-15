import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

const WishlistTableSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-6xl px-4 xl:px-0 xl:py-8"
    >
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-8 w-48 rounded-md" />
        <Skeleton className="h-5 w-16 rounded-md" />
      </div>
      <div className="min-w-[700px] font-inter">
        <div className="flex items-center  py-4 border-b">
          <Skeleton className="h-5 w-24 mr-6" />
          <Skeleton className="h-5 w-32 mr-6" />
          <Skeleton className="h-5 w-20 mr-6" />
          <Skeleton className="h-5 w-28 mr-6" />
          <Skeleton className="h-5 w-20 ml-auto" />
        </div>

        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center px-6 py-4 border-b animate-pulse"
          >
            <Skeleton className="w-[140px] h-[90px] rounded mr-6" />
            <div className="flex-1">
              <Skeleton className="h-4 w-40 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-16 mx-6" />
            <Skeleton className="h-6 w-24 mx-6 rounded-full" />
            <div className="ml-auto flex gap-2">
              <Skeleton className="h-8 w-8 rounded" />
              <Skeleton className="h-8 w-8 rounded" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WishlistTableSkeleton;
