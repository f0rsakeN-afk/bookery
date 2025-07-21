import { Pencil, Trash2 } from "lucide-react";
import { TableRow, TableCell } from "../ui/table";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";
import { productTypes } from "@/types/product";
import { useDeleteProduct } from "@/services/dashboard";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import EditProduct from "./EditProduct";
import { useState } from "react";
import { BACKEND_IMAGE_URL } from "@/utils/config";

interface dashboardTableItemsProps {
  product: productTypes;
}

const DashBoardTableItems = ({ product }: dashboardTableItemsProps) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [editDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

  const deleteMutation = useDeleteProduct();

  return (
    <TableRow>
      <TableCell>
        <img
          src={`${BACKEND_IMAGE_URL}/public/product/${product.image}`}
          alt={product.title}
          loading="lazy"
          className="w-16 h-16 object-cover rounded-md"
        />
      </TableCell>
      <TableCell className="font-medium capitalize">{product.title}</TableCell>
      <TableCell>Rs.{product.price.toFixed(2)}</TableCell>
      <TableCell>{product.discountPercentage}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{new Date(product.createdAt!).toLocaleDateString()}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Dialog open={editDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <EditProduct
                product={product}
                /*      id={product._id!} */
                onSuccess={() => setIsEditDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>

          <AlertDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  and remove all associated data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  disabled={deleteMutation.isPending}
                  onClick={() =>
                    deleteMutation.mutate(
                      { id: product._id! },
                      { onSuccess: () => setIsDeleteDialogOpen(false) }
                    )
                  }
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DashBoardTableItems;
