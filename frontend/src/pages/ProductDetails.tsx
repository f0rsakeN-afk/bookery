import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useGetProductDetails } from "@/services/product";
import ProductDetailsSkeleton from "@/components/productDetails/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ProductExtraInfo from "@/components/productDetails/ExtraInfo";
import Reviews from "@/components/productDetails/Reviews";
import Placeholder from "@/components/productDetails/Placeholder";
import { useAuth } from "@/context/AuthContext";
import { useAddToCart } from "@/services/cart";
import { useAddToWishlist } from "@/services/wishlist";
import { BACKEND_IMAGE_URL } from "@/utils/config";
/* import { add } from "date-fns"; */

// Animation config
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [cartQuantity, setCartQuantity] = useState<number>(1);

  useEffect(() => {
    if (!id) {
      toast.error("No product ID provided in the URL.");
    }
  }, [id]);

  const addToCartMutation = useAddToCart();
  const addToWishlistMutation = useAddToWishlist();

  const { user } = useAuth();

  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductDetails(id ?? "");

  if (isLoading) return <ProductDetailsSkeleton />;

  if (!id || isError || !productData?.data) {
    return (
      <div className="container max-w-3xl mx-auto py-20 text-center font-inter">
        <h2 className="text-2xl font-semibold text-destructive">
          Product Not Found
        </h2>
        <p className="text-muted-foreground mt-2">
          Please check the product ID or try again later.
        </p>
      </div>
    );
  }

  const product = productData.data;
  /*   console.log(product) */
  const isProductAvailable = Number(product.quantity) > 0;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (!product) return;

    if (type === "decrease" && cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    } else if (type === "increase" && cartQuantity < Number(product.quantity)) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCartMutation.mutate({
      productId: product.id!,
      quantity: cartQuantity,
    });
  };

  const handleToggleWishlist = () => {
    addToWishlistMutation.mutate({ productId: product.id! });
  };

  return (
    <motion.div
      className="container mx-auto max-w-6xl px-2 xl:px-0 py-10 flex flex-col space-y-6"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* Product Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-inter">
        {/* Product Image */}
        <motion.div
          className="aspect-square overflow-hidden rounded-xl bg-muted order-1 md:col-span-1"
          variants={fadeUp}
          custom={0}
        >
          <img
            src={`${BACKEND_IMAGE_URL}/public/product/${product.image}`}
            loading="lazy"
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          className="space-y-6 order-2 md:col-span-1 lg:col-span-2"
          variants={fadeUp}
          custom={0.3}
        >
          <motion.div variants={fadeUp} custom={0.4}>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary/90 capitalize">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Brand: {product.brand}
            </p>
          </motion.div>

          {/* Price Section */}
          <motion.div className="space-y-1" variants={fadeUp} custom={0.5}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xl sm:text-2xl font-bold">
                Rs.{product.priceAfterDiscount.toFixed(2)}
              </span>
              <span className="text-sm sm:text-base text-muted-foreground line-through decoration-red-500">
                Rs.{product.price.toFixed(2)}
              </span>
              <span className="text-sm text-green-600">
                {product.discountPercentage}% OFF
              </span>
            </div>
            <p
              className={cn(
                "text-sm",
                Number(product.quantity) < 5 ? "text-red-600" : "text-green-600"
              )}
            >
              In Stock ({product.quantity} available)
            </p>
          </motion.div>

          <Separator />

          {/* Category */}
          <motion.div
            className="flex items-center gap-1"
            variants={fadeUp}
            custom={0.6}
          >
            <span className="text-sm text-muted-foreground">Category:</span>
            <Badge variant="outline">{product.category}</Badge>
          </motion.div>

          {/* Quantity Selector */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6"
            variants={fadeUp}
            custom={0.8}
          >
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
                disabled={cartQuantity >= Number(product.quantity)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-4 sm:mt-6"
            variants={fadeUp}
            custom={0.9}
          >
            <Button
              className="flex-1 gap-2"
              onClick={handleAddToCart}
              disabled={
                !isProductAvailable ||
                user?.role === "admin" ||
                addToCartMutation.isPending
              }
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              onClick={handleToggleWishlist}
              disabled={
                !isProductAvailable ||
                user?.role === "admin" ||
                addToWishlistMutation.isPending
              }
              className="text-red-500 gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              Add to Wishlist
            </Button>
          </motion.div>
        </motion.div>

        {/* Placeholder Column */}
        <div className="order-3 hidden lg:block">
          <Placeholder />
        </div>
      </div>

      <Separator />

      {/* Product Description & Shipping */}
      <motion.div variants={fadeUp} custom={0.7} className="font-inter">
        <section>
          <h3 className="font-semibold underline decoration-2 underline-offset-4 ">
            Description
          </h3>
          <p className="text-muted-foreground mb-4">{product.description}</p>

          <h3 className="font-semibold underline decoration-2 underline-offset-4 ">
            Shipping Details
          </h3>
          <div className="text-muted-foreground space-y-1">
            <p>
              <span className="font-medium text-primary/90">Weight:</span>{" "}
              {product.shipping.weight} kg
            </p>
            <p>
              <span className="font-medium text-primary/90">
                Dimensions (L × W × H):
              </span>{" "}
              {product.shipping.dimensions.length} ×{" "}
              {product.shipping.dimensions.width} ×{" "}
              {product.shipping.dimensions.height} cm
            </p>
          </div>
        </section>
      </motion.div>
      <Separator />

      <Reviews reviews={product.reviews} id={product._id!} />

      <ProductExtraInfo />
    </motion.div>
  );
};

export default ProductDetails;
