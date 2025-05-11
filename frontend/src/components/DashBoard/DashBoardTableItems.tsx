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

interface dashboardTableItemsProps {
  product: productTypes;
}

const DashBoardTableItems = ({ product }: dashboardTableItemsProps) => {
  return (
    <TableRow>
      <TableCell>
        <img
          src={product.image}
          alt={product.title}
          className="w-16 h-16 object-cover rounded-md"
        />
      </TableCell>
      <TableCell className="font-medium">{product.title}</TableCell>
      <TableCell>Rs.{product.price.toFixed(2)}</TableCell>
      <TableCell>{product.discountPercentage}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{new Date(product.createdAt!).toLocaleDateString()}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>

          <AlertDialog>
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
                  product and remove all associated data from our servers.
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
    </TableRow>
  );
};

export default DashBoardTableItems;
