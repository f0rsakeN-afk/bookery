import { motion } from "motion/react";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useRemoveFromCart, useUpdateCartQuantity } from "@/services/cart";
import { NavLink } from "react-router-dom";
import { CartItem } from "@/types/cart";

interface CartItemProps {
  items: CartItem[];
}

const CartItems = ({ items }: CartItemProps) => {
  const removeFromCartMutation = useRemoveFromCart();
  const updateCartQuantityMutation = useUpdateCartQuantity();

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table className="min-w-[600px] font-inter">
        <TableHeader>
          <TableRow>
            <TableHead className="w-32 sm:w-44">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((el, index: number) => (
            <motion.tr
              key={el._id || index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group hover:bg-muted/50 "
            >
              <TableCell>
                <img
                  src={el.product.image}
                  loading="lazy"
                  alt={el.product.title}
                  className="w-full xl:max-w-[160px]  aspect-[3/2] object-cover rounded"
                />
              </TableCell>
              <TableCell>
                <NavLink to={`/productDetails/${el.product.id}`}>
                  <p className="font-medium">{el.product.title}</p>
                </NavLink>
              </TableCell>
              <TableCell>
                <h2 className="font-medium">
                  Rs.{el.product.priceAfterDiscount?.toFixed(2)}
                </h2>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center gap-2">
                  <Button
                    variant={"outline"}
                    disabled={
                      el.quantity <= 1 || updateCartQuantityMutation.isPending
                    }
                    onClick={() => {
                      updateCartQuantityMutation.mutate({
                        productId: el.product.id,
                        quantity: el.quantity - 1,
                      });
                    }}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <h2 className="font-medium">{el.quantity}</h2>{" "}
                  <Button
                    variant={"outline"}
                    disabled={
                      updateCartQuantityMutation.isPending ||
                      el.quantity === el.product.quantity
                    }
                    onClick={() => {
                      updateCartQuantityMutation.mutate({
                        productId: el.product.id,
                        quantity: el.quantity + 1,
                      });
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant={"destructive"} size={"sm"}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to remove this item?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete the product from your cart.
                        You'll need to add it again if you change your mind.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        disabled={removeFromCartMutation.isPending}
                      >
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        disabled={removeFromCartMutation.isPending}
                        onClick={() =>
                          removeFromCartMutation.mutate({
                            productId: el.product.id,
                          })
                        }
                      >
                        {removeFromCartMutation.isPending
                          ? "Deleting"
                          : "Continue"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartItems;
