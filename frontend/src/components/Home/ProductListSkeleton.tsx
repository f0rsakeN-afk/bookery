import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ProductListSkeleton = () => {
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-2">
      <section className="flex items-center justify-between pb-2">
        <Skeleton className="h-8 w-[150px]" />
        <Skeleton className="h-6 w-[100px]" />
      </section>

      <ScrollArea className="w-full whitespace-nowrap rounded-md border-2 border-figmaPrimary">
        <div className="flex space-x-4 pb-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-[160px] md:w-[200px] shrink-0 space-y-3 p-3"
            >
              <Skeleton className="aspect-[2/3] w-full rounded-lg" />
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
              <div className="flex gap-2">
                <Skeleton className="h-8 flex-1" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ProductListSkeleton;
