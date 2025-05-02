import { NavLink } from "react-router-dom";
import { ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import ProductListSkeleton from "./ProductListSkeleton";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProductListProps {
  title: string;
  order:string;
}



const ProductList = () => {
  return (
    <div>ProductList</div>
  )
}



/* const ProductList = ({ title,order }: ProductListProps) => {


  if (isLoading) return <BookListSkeleton />;

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-2" id="books">
      <section className="flex items-center justify-between pb-2">
        <h2 className="font-playfair font-semibold text-xl md:text-2xl text-primary">
          {title}
        </h2>
        <NavLink
          to="/"
          className="flex items-center gap-1 font-inter text-sm md:text-base hover:text-primary transition-colors ease-in-out duration-200 hover:underline underline-offset-4"
        >
          See All
          <ChevronRight className="h-4 w-4" />
        </NavLink>
      </section>

      <ScrollArea className="w-full whitespace-nowrap rounded-md border-2 border-figmaPrimary/50">
        <div className="flex space-x-4 pb-4">
          {data?.items.map((book, index: number) => (
            <NavLink
              to={`/bookdetails/${book.id}`}
              key={book.id || index}
              className="group w-[160px] md:w-[200px] shrink-0 flex flex-col space-y-3 hover:shadow-lg rounded-lg p-3 transition-all duration-300"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-md">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2">
                <h3
                  className="font-medium text-sm truncate"
                  title={book.volumeInfo.title}
                >
                  {book.volumeInfo.title}
                </h3>
                <p className="text-sm text-muted-foreground">Price: Rs.289</p>
              </div>

              <div className="flex gap-2 mt-auto">
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 text-xs items-center"
                >
                  <ShoppingCart /> Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "h-8 w-8",
                    "hover:text-red-500 hover:border-red-500"
                  )}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </NavLink>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}; */

export default ProductList;
