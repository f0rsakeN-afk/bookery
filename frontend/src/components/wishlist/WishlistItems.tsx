import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
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

const WishlistTable = ({ items }) => {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table className="min-w-[700px] font-inter">
        <TableHeader>
          <TableRow>
            <TableHead className="w-28 sm:w-44">Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <motion.tr
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group hover:bg-muted/50"
            >
              <TableCell>
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.title}
                  className="w-full max-w-[140px] aspect-[3/2] object-cover rounded"
                />
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.author}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium">${item.price.toFixed(2)}</div>
              </TableCell>
              <TableCell>
                <Badge
                  className={`${
                    item.inStock
                      ? "text-green-600 bg-green-50 dark:bg-gray-900"
                      : "text-red-600 bg-red-50 dark:bg-gray-900"
                  } px-2 py-1 rounded-full text-sm`}
                >
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end flex-wrap gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    disabled={!item.inStock}
                    onClick={() => {
                      /* Handle add to cart */
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          /* Handle remove */
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Deleting this product will permanently remove it along
                          with all related data from your wishlist. This action
                          cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WishlistTable;
