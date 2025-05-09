import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CirclePlus, Pencil, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProduct from "@/components/DashBoard/AddProduct";
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
} from "@/components/ui/alert-dialog";
/* import Analytics from "@/components/DashBoard/Analytics"; */

// Dummy data
const dummyProducts = [
  {
    id: 1,
    image: "https://picsum.photos/100/100",
    title: "The Great Gatsby",
    price: 29.99,
    quantity: 50,
    listedOn: "2024-02-20",
  },
  {
    id: 2,
    image: "https://picsum.photos/100/100",
    title: "To Kill a Mockingbird",
    price: 24.99,
    quantity: 35,
    listedOn: "2024-02-19",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 xl:py-10">
      <section className="flex items-center justify-between">
        <h2 className="text-[28px] text-primary/90 font-playfair font-bold">
          Dashboard
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <CirclePlus className="h-5 w-5" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddProduct />
          </DialogContent>
        </Dialog>
      </section>
      {/*     <Separator className="my-4" />
      <Analytics /> */}
      <Separator className="my-4" />
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="font-playfair">All Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="font-inter">
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Listed On</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {product.title}
                    </TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      {new Date(product.listedOn).toLocaleDateString()}
                    </TableCell>
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
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete the product and remove all
                                associated data from our servers.
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
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
