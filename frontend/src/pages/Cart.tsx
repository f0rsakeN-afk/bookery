import { motion } from "motion/react";
import { useState } from "react";
import Cartheader from "@/components/cart/Cartheader";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItems from "@/components/cart/CartItems";
import { useGetMyCart } from "@/services/cart";
import CartItemsSkeleton from "@/components/cart/Loader";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CheckoutDialog from "@/components/checkout/CheckoutDialog";

const Cart = () => {
  const [openCheckoutDialog, setOpenCheckoutDialog] = useState<boolean>(false);
  const { data: cartData, isLoading, isError, refetch } = useGetMyCart();

  if (isLoading) return <CartItemsSkeleton />;

  if (isError)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center px-4 py-12 text-center"
      >
        <p className="text-sm text-muted-foreground font-medium font-inter mb-4">
          Oops! We couldn't load your cart. Please try again.
        </p>
        <Button onClick={() => refetch()}>Retry</Button>
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-6xl px-4 xl:px-0 xl:py-8"
    >
      <Cartheader itemCount={cartData.results} />
      {cartData.results > 0 ? (
        <section className="space-y-2">
          <CartItems items={cartData.data} />
          <div className="flex justify-end">
            <Dialog
              open={openCheckoutDialog}
              onOpenChange={setOpenCheckoutDialog}
            >
              <DialogTrigger asChild>
                <Button className="w-max">
                  Checkout <MdOutlineShoppingCartCheckout />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <CheckoutDialog items={cartData.data} onSuccess={()=>setOpenCheckoutDialog(false)}/>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      ) : (
        <EmptyCart />
      )}
    </motion.div>
  );
};

export default Cart;
