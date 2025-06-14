import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const OrderCardSkeleton = () => {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>

      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-24" />

      <Separator />

      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="w-16 h-12 rounded-md" />
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
          <Skeleton className="h-4 w-14" />
        </div>
      ))}
    </Card>
  );
};

export default OrderCardSkeleton;
