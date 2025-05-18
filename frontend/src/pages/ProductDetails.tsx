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

  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductDetails(id ?? "");

  if (isLoading) return <ProductDetailsSkeleton />;

  if (!id || isError || !productData?.data) {
    return (
      <div className="container max-w-3xl mx-auto py-20 text-center">
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
    <motion.div
      className="container mx-auto max-w-6xl px-2 xl:px-0 py-10"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="grid md:grid-cols-2 gap-8 font-inter">
        {/* Image */}
        <motion.div
          className="aspect-square overflow-hidden rounded-xl bg-muted"
          variants={fadeUp}
          custom={0}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
          />
        </motion.div>

        {/* Details */}
        <motion.div className="space-y-6" variants={fadeUp} custom={0.3}>
          <motion.div variants={fadeUp} custom={0.4}>
            <h1 className="text-3xl font-bold text-primary/90">
              {product.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              Brand: {product.brand}
            </p>
          </motion.div>

          {/* Price */}
          <motion.div className="space-y-1" variants={fadeUp} custom={0.5}>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">
                Rs.{product.priceAfterDiscount.toFixed(2)}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                Rs.{product.price.toFixed(2)}
              </span>
              <span className="text-sm text-green-600">
                {product.discountPercentage}% OFF
              </span>
            </div>
            <p
              className={cn(
                "text-sm",
                product.quantity && Number(product.quantity) < 5
                  ? "text-red-600"
                  : "text-green-600"
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
            <Badge variant={"outline"}>{product.category}</Badge>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp} custom={0.7}>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </motion.div>

          {/* Quantity */}
          <motion.div
            className="flex items-center gap-4"
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

          {/* Buttons */}
          <motion.div className="flex gap-4" variants={fadeUp} custom={0.9}>
            <Button
              className="flex-1 gap-2"
              onClick={handleAddToCart}
              disabled={!isProductAvailable}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
            <Button
              disabled={!isProductAvailable}
              variant="outline"
              size="icon"
              onClick={handleToggleWishlist}
              className="text-red-500"
            >
              <Heart className="w-4 h-4 fill-current" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Extra Info Component */}
      <ProductExtraInfo />
    </motion.div>
  );
};

export default ProductDetails;
