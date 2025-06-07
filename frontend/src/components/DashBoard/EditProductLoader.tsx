import React from "react";
import { Skeleton } from "../ui/skeleton";

const EditProductSkeleton: React.FC = () => {
  return (
    <div className="md:p-4 max-h-[70dvh] overflow-y-auto space-y-6">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

      {/* Image Upload */}
      <div className="flex flex-col items-center gap-4 p-4 border-2 border-dashed rounded-lg">
        <Skeleton className="w-24 h-24 rounded-lg" />
        <Skeleton className="w-40 h-4" />
      </div>

      {/* Title */}
      <div>
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Description */}
      <div>
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-24 w-full" />
      </div>

      {/* Category */}
      <div>
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Price & Quantity */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Brand & Discount */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-28 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Shipping Info */}
      <div className="border rounded-lg p-4 space-y-4">
        <Skeleton className="h-5 w-32 mb-2" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Weight", "Length", "Width", "Height"].map((label: string, i) => (
            <div key={i}>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
};

export default EditProductSkeleton;
