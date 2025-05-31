import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-10 flex flex-col space-y-6">
      {/* Product Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-inter">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-xl bg-muted md:col-span-1" />
        
        {/* Product Info */}
        <div className="space-y-6 md:col-span-1 lg:col-span-2">
          <Skeleton className="h-8 w-3/4" /> {/* Title */}
          <Skeleton className="h-5 w-1/4" /> {/* Brand */}
          
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/4" /> {/* Price */}
            <Skeleton className="h-4 w-1/4" /> {/* Original Price */}
            <Skeleton className="h-4 w-1/6" /> {/* Discount */}
            <Skeleton className="h-4 w-1/3" /> {/* Stock info */}
          </div>

          <Separator />

          <Skeleton className="h-4 w-1/5" /> {/* Category */}
          <div className="flex items-center gap-4 mt-4">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>

          <div className="flex gap-4 mt-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        {/* Placeholder Column */}
        <div className="hidden lg:block">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      </div>

      <Separator />

      {/* Description & Shipping */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-40" /> {/* Description heading */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />

        <Skeleton className="h-5 w-40 mt-4" /> {/* Shipping heading */}
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <Separator />

      {/* 💬 Reviews Loader */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-40" /> {/* "Customer Reviews" heading */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border rounded-lg p-4 space-y-2 bg-muted/50 shadow-sm"
          >
            <Skeleton className="h-4 w-1/4" /> {/* Reviewer name */}
            <Skeleton className="h-4 w-1/2" /> {/* Rating */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
