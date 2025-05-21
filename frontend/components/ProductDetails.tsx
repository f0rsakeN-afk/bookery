<frontend/components/ProductDetails.tsx>
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Tag,
  Package,
  Clock,
  CreditCard,
  ShieldCheck,
  Truck,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useGetProductDetails } from "@/services/product";
import ProductDetailsSkeleton from "@/components/productDetails/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [cartQuantity, setCartQuantity] = useState<number>(1);

  useEffect(() => {
    if (!id) {
      toast.error("No product ID provided in the URL.");
    }
  }, [id]);

  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductDetails(id ?? "");

  if (isLoading) return <ProductDetailsSkeleton />;

  if (!id || isError || !productData?.data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h2 className="text-3xl font-bold text-red-600">Product Not Found</h2>
        <p className="text-gray-500 mt-2">
          Please check the product ID or try again later.
        </p>
      </div>
    );
  }

  const product = productData.data;
  const isProductAvailable: boolean = Number(product.quantity) > 0;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (!product) return;

    if (type === "decrease" && cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    } else if (type === "increase" && cartQuantity < Number(product.quantity)) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  const handleAddToCart = () => {
    toast.success(`${product.title} added to cart!`);
  };

  const handleToggleWishlist = () => {
    toast.info("Wishlist toggled!");
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Image Section */}
        <div className="col-span-1">
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
            />
          </div>
        </div>

        {/* Main Details Section */}
        <div className="col-span-2 space-y-8">
          {/* Title & Brand */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-lg text-gray-500 mt-2">
              <Tag className="inline-block w-5 h-5 mr-2 text-gray-400" />
              Brand:{" "}
              <span className="font-medium text-gray-700">{product.brand}</span>
            </p>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-extrabold text-green-600">
                Rs.{product.priceAfterDiscount.toFixed(2)}
              </span>
              <span className="text-lg text-gray-400 line-through">
                Rs.{product.price.toFixed(2)}
              </span>
              <span className="text-sm text-green-500 font-semibold bg-green-100 px-2 py-1 rounded">
                {product.discountPercentage}% OFF
              </span>
            </div>
            <p
              className={`text-sm flex items-center gap-2 ${
                product.quantity && Number(product.quantity) < 5
                  ? "text-red-600"
                  : "text-green-600"
              }`}
              aria-live="polite"
            >
              {product.quantity && Number(product.quantity) < 5 ? (
                <>
                  <AlertTriangle className="w-5 h-5" />
                  Only {product.quantity} left in stock!
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  In Stock ({product.quantity} available)
                </>
              )}
            </p>
          </div>

          <Separator />

          {/* Category */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Tag className="w-5 h-5" />
            <span>Category:</span>
            <Badge variant={"outline"}>{product.category}</Badge>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="font-medium text-gray-800">
              Quantity:
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange("decrease")}
                disabled={cartQuantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span
                id="quantity"
                className="w-12 text-center text-lg font-semibold"
                aria-live="polite"
              >
                {cartQuantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange("increase")}
                disabled={cartQuantity >= Number(product.quantity)}
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              className="flex-1 bg-blue-600 text-white hover:bg-blue-700 transition rounded-lg py-3"
              onClick={handleAddToCart}
              disabled={!isProductAvailable}
              aria-disabled={!isProductAvailable}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              disabled={!isProductAvailable}
              variant="outline"
              size="icon"
              onClick={handleToggleWishlist}
              className="text-red-600 hover:bg-red-100 transition rounded-lg py-3"
              aria-disabled={!isProductAvailable}
              aria-label="Toggle wishlist"
            >
              <Heart className="w-5 h-5 fill-current" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Return & Warranty
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <Package className="w-5 h-5 text-gray-400" />
            30-day return policy from the date of purchase.
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gray-400" />
            7-day replacement warranty for defective products.
          </li>
          <li className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-gray-400" />
            Contact support for return or warranty claims.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
```