import { motion } from "motion/react";
import { Skeleton } from "../ui/skeleton";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";

const CartItemsSkeleton = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 xl:px-0 xl:py-8">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="flex justify-between items-center mb-4"
      >
        <div>
          <Skeleton className="h-8 w-40 rounded" />
        </div>
        <Skeleton className="h-5 w-16 rounded" />
      </motion.div>

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
            {Array.from({ length: 4 }).map((_, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Skeleton className="w-[140px] h-[90px] rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-40 h-5 mb-2" />
                  <Skeleton className="w-24 h-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-16 h-5" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-8 h-8 rounded" />
                    <Skeleton className="w-6 h-5" />
                    <Skeleton className="w-8 h-8 rounded" />
                  </div>
                </TableCell>
                <TableCell>
                  <Skeleton className="w-9 h-8 rounded" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CartItemsSkeleton;
