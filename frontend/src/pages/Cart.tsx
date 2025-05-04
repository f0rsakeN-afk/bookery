import { motion } from "motion/react";
import Cartheader from "@/components/cart/Cartheader";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItems from "@/components/cart/CartItems";

const cartItems = [
/*   {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 19.99,
    quantity: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
    inStock: true,
  }, */
];

const Cart = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-6xl px-4 xl:px-0 xl:py-8"
    >
      <Cartheader itemCount={cartItems.length} />
      {cartItems.length > 0 ? <CartItems items={cartItems} /> : <EmptyCart />}
    </motion.div>
  );
};

export default Cart;
