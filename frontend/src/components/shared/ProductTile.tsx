import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { productTypes } from "@/types/product";

interface productTileProps {
  el: productTypes;
}

const ProductTile = ({ el }: productTileProps) => {
  return (
    <div className="group w-full flex flex-col space-y-3 hover:shadow-lg rounded-xl p-3 transition-all duration-300 border ">
      <NavLink
        to={`/productDetails/${el.id}`}
        className="relative aspect-[3/4] overflow-hidden rounded-md"
      >
        <img
          src={el.image}
          alt={el.title}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </NavLink>

      <div className="space-y-2">
        <h3 className="font-medium text-sm truncate">{el.title}</h3>
        <section className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground line-through decoration-red-500">
              Rs. {el.price}
            </span>
            <span className="text-sm font-semibold text-foreground">
              Rs. {el.priceAfterDiscount}
            </span>
          </div>
          {el.discountPercentage > 0 && (
            <span className="text-xs font-medium text-green-600 bg-green-200 px-2 py-0.5 rounded">
              {el.discountPercentage}% OFF
            </span>
          )}
        </section>
      </div>

      <div className="flex gap-2 mt-auto">
        <Button
          variant="default"
          size="sm"
          className="flex-1 text-xs flex items-center gap-1 justify-center"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={cn("h-8 w-8", "hover:text-red-500 hover:border-red-500")}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductTile;
