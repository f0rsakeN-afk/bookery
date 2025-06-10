import React, { useState } from "react";
import { Bell, CirclePlus } from "lucide-react";
import { productTypes } from "@/types/product";
import { useGetAllMessages } from "@/services/contact";
import { useGetAllProducts } from "@/services/dashboard";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddProduct from "@/components/DashBoard/AddProduct";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Notifications from "@/components/DashBoard/Notifications";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashBoardTableItems from "@/components/DashBoard/DashBoardTableItems";
import Loader from "@/components/shared/Loader";
/* import Analytics from "@/components/DashBoard/Analytics"; */

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  //Fetch contact messages
  const { data: contactData } = useGetAllMessages();
  /* fetch all products */
  const { data: productData, isLoading, isError } = useGetAllProducts();

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-4 xl:py-10">
      <section className="flex items-center justify-between">
        <h2 className="text-[28px] text-primary/90 font-playfair font-bold">
          Dashboard
        </h2>

        <section className="flex items-center gap-1">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <CirclePlus className="h-5 w-5" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AddProduct /* open={open} */ onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="relative">
                {contactData && contactData?.data.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                    {contactData?.data.length}
                  </span>
                )}
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0 -translate-x-2">
              <Notifications contactData={contactData} />
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>
      {/*     <Separator className="my-4" />
      <Analytics /> */}
      <Separator className="my-4" />

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="text-center font-inter text-muted-foreground">
          Error fetching products
        </p>
      ) : (
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">
                All Products{" "}
                <span className="font-inter">({productData?.results})</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="font-inter">
                <TableCaption>
                  A list of all products listed on{" "}
                  <span className="font-semibold text-yellow-500">
                    SnapKart
                  </span>
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Discount %</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Listed On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productData &&
                    productData.data.map((product: productTypes) => (
                      <DashBoardTableItems key={product.id} product={product} />
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
