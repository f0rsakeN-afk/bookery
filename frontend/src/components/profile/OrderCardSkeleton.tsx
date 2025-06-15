import { Card, CardHeader, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

const OrderCardSkeleton = () => (
  <Card className="rounded-sm font-inter gap-1 w-full">
    <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-1">
      <div className="w-full space-y-2">
        <Skeleton className="h-4 w-40" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <Separator className="my-1" />
      <div className="space-y-2 mb-2 text-sm">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-48" />
      </div>
      <h4 className="font-medium mb-1 text-primary/90">Products</h4>
      <div className="space-y-3">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="w-16 aspect-[3/2] rounded-md" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default OrderCardSkeleton;
