import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import ProductListSkeleton from "./ProductListSkeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetAllProducts } from "@/services/productList";
import { useAuth } from "@/context/AuthContext";

const ProductList = () => {
  const { data: productData, isLoading, isError } = useGetAllProducts();
  const { user } = useAuth();
  if (isLoading) return <ProductListSkeleton />;
  if (isError)
    return (
      <p className="text-center font-inter text-muted-foreground">
        Error fetching products
      </p>
    );
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-2" id="books">
      <section className="flex items-center justify-between pb-2">
        <h2 className="font-playfair font-semibold text-xl md:text-2xl text-primary">
          Recent Products
        </h2>
        <NavLink
          to="/allproducts"
          className="flex items-center gap-1 font-inter text-sm md:text-base hover:text-primary transition-colors ease-in-out duration-200 hover:underline underline-offset-4"
        >
          See All
          <ChevronRight className="h-4 w-4" />
        </NavLink>
      </section>

      <ScrollArea className="w-full whitespace-nowrap rounded-md border-2 border-figmaPrimary/50">
        <div className="flex space-x-4 pb-4 font-inter">
          {productData &&
            productData.data?.map((el, index: number) => (
              <div
                key={el.id || index}
                className="group w-[160px] md:w-[200px] shrink-0 flex flex-col space-y-3 hover:shadow-lg rounded-lg p-3 transition-all duration-300"
              >
                <NavLink
                  to={`/productDetails/${el.id}`}
                  className="relative aspect-[2/3] overflow-hidden rounded-md"
                >
                  <img
                    src={el.image}
                    loading="lazy"
                    alt={el.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </NavLink>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm truncate">{el.title}</h3>
                  <p className="text-sm font-semibold">
                    Rs.
                    <span className="text-green-500">
                      {el.priceAfterDiscount}
                    </span>
                  </p>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="default"
                    disabled={user?.role === "admin"}
                    size="sm"
                    className="flex-1 text-xs items-center"
                  >
                    <ShoppingCart /> Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={user?.role === "admin"}
                    className={cn(
                      "h-8 w-8",
                      "hover:text-red-500 hover:border-red-500"
                    )}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ProductList;
