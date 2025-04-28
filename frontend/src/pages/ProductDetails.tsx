import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Matching the AddProduct form fields
const dummyProduct = {
  id: "1",
  title: "Wireless Bluetooth Headphones",
  description:
    "High-quality wireless headphones with noise cancellation feature and long battery life. Perfect for music lovers and professionals.",
  price: 149.99,
  quantity: 50, // available stock
  category: "Electronics",
  brand: "SoundMax",
  discountPercentage: 15,
  image: "https://picsum.photos/600/600", // using single image as per AddProduct
};

const ProductDetails = () => {
  const { id } = useParams();
  const [cartQuantity, setCartQuantity] = useState(1);

  // Calculate discounted price
  const discountedPrice =
    dummyProduct.price -
    (dummyProduct.price * dummyProduct.discountPercentage) / 100;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "decrease" && cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    } else if (type === "increase" && cartQuantity < dummyProduct.quantity) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  const handleAddToCart = () => {};

  const handleToggleWishlist = () => {};

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="aspect-square overflow-hidden rounded-xl">
          <img
            src={dummyProduct.image}
            alt={dummyProduct.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-playfair font-bold text-primary/90">
              {dummyProduct.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              Brand: {dummyProduct.brand}
            </p>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ${dummyProduct.price.toFixed(2)}
              </span>
              <span className="text-sm text-green-600">
                {dummyProduct.discountPercentage}% OFF
              </span>
            </div>
            <p className="text-sm text-green-600">
              In Stock ({dummyProduct.quantity} available)
            </p>
          </div>

          <Separator />

          {/* Category */}
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">Category:</span>
            <Badge>{dummyProduct.category}</Badge>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{dummyProduct.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange("decrease")}
                disabled={cartQuantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-12 text-center">{cartQuantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange("increase")}
                disabled={cartQuantity >= dummyProduct.quantity}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1 gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleToggleWishlist}
              className={1 ? "text-red-500" : ""}
            >
              <Heart className={`w-4 h-4 ${1 ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
