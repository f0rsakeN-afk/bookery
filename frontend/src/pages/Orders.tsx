import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";
import { Pencil } from "lucide-react";
import { format } from "date-fns";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import EditOrder from "@/components/orders/EditOrder";
import { maskEmail } from "@/utils/maskEmail";
import OrderCardSkeleton from "@/components/orders/Loader";
import { useGetAllOrders } from "@/services/Order";
import { Order } from "@/types/orderAdmin";
import { BACKEND_IMAGE_URL } from "@/utils/config";

const Orders: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const { data, isLoading, isError } = useGetAllOrders();

  /*   console.log(data); */

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-6 xl:py-8">
      <h2 className="text-2xl font-semibold font-playfair text-primary mb-6">
        All Orders
      </h2>

      <ScrollArea className="h-[80dvh]">
        <div className="space-y-4">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, idx) => (
              <OrderCardSkeleton key={idx} />
            ))
          ) : isError ? (
            <p className="text-center text-red-500">Error loading orders</p>
          ) : data.data && data.data.length === 0 ? (
            <p className="text-center text-muted-foreground mt-10">
              No orders found.
            </p>
          ) : (
            data.data.map((order: Order) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-md font-inter gap-1">
                  <CardHeader className="flex flex-row justify-between gap-4">
                    <div>
                      <CardTitle className="text-xs">
                        Order ID:{" "}
                        <span className="text-muted-foreground">
                          {order._id}
                        </span>
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">{order.orderStatus}</Badge>
                        <Badge
                          className={`${
                            order.paymentStatus === "paid"
                              ? "bg-green-100 text-green-700"
                              : order.paymentStatus === "failed"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {order.paymentStatus}
                        </Badge>
                        <Badge variant="outline">Rs.{order.totalPrice}</Badge>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size={"icon"}
                      onClick={() => setSelectedOrder(order)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </CardHeader>

                  <CardContent>
                    <Separator className="my-1" />

                    <div className="mb-2">
                      <p className="text-sm text-primary/90 capitalize">
                        {order.user.name} (
                        <span className="text-muted-foreground text-xs">
                          {maskEmail(order.user.email)}
                        </span>
                        )
                      </p>
                      <p className="text-muted-foreground text-xs">
                        <strong>Created:</strong>{" "}
                        {format(new Date(order.createdAt), "PPP")}
                      </p>
                    </div>

                    <h4 className="font-medium mb-1 text-primary/90">
                      Products
                    </h4>
                    <div className="space-y-2">
                      {order.products &&
                        order.products.map((item, i: number) =>
                          item.product ? (
                            <React.Fragment key={i}>
                              <div className="flex items-center gap-4">
                                <img
                                  src={`${BACKEND_IMAGE_URL}/public/product/${item.product.image}`}
                                  alt={item.product.title}
                                  className="w-16 aspect-3/2 object-cover rounded-md border"
                                />
                                <div className="flex-1">
                                  <p className="font-medium text-primary/90 capitalize">
                                    {item.product.title}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    Rs.{item.product.priceAfterDiscount} ×{" "}
                                    {item.quantity}
                                  </p>
                                </div>
                                <p className="font-semibold text-sm text-green-500">
                                  Rs.
                                  {(
                                    item.product.priceAfterDiscount *
                                    item.quantity
                                  ).toFixed(2)}
                                </p>
                              </div>
                              <Separator />
                            </React.Fragment>
                          ) : (
                            <React.Fragment key={i}>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground italic">
                                <p className="text-red-500">
                                  Product deleted or unavailable
                                </p>
                                <p>× {item.quantity}</p>
                              </div>
                              <Separator />
                            </React.Fragment>
                          )
                        )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </ScrollArea>

      <Dialog
        open={!!selectedOrder}
        onOpenChange={(open) => {
          if (!open) setSelectedOrder(null);
        }}
      >
        <DialogContent className="w-[400px]">
          {selectedOrder && (
            <EditOrder
              id={selectedOrder._id}
              orderStatus={selectedOrder.orderStatus}
              paymentStatus={selectedOrder.paymentStatus}
              onSuccess={() => setSelectedOrder(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Orders;
