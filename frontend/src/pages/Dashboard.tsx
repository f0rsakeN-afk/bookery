import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Bell, CirclePlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProduct from "@/components/DashBoard/AddProduct";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Notifications from "@/components/DashBoard/Notifications";
import { useGetAllMessages } from "@/services/contact";
import DashBoardTableItems from "@/components/DashBoard/DashBoardTableItems";
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
  //Fetch contact messages
  const { data: contactData, isLoading: contactDataLoading } =
    useGetAllMessages();
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-4 xl:py-10">
      <section className="flex items-center justify-between">
        <h2 className="text-[28px] text-primary/90 font-playfair font-bold">
          Dashboard
        </h2>

        <section className="flex items-center gap-1">
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
                  <DashBoardTableItems key={product.id} product={product} />
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
