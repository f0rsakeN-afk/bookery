import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <Skeleton className="aspect-square w-full rounded-xl" />

        {/* Text Skeletons */}
        <div className="space-y-6">
          <div>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-5 w-1/3 mt-2" />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-4 w-32" />
          </div>

          <Skeleton className="h-px w-full" />

          {/* Category */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-24 rounded-md" />
          </div>

          {/* Description */}
          <div>
            <Skeleton className="h-5 w-1/4 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-20" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="h-5 w-12" />
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Skeleton className="h-10 flex-1 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
