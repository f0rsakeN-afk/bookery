import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { format } from "date-fns";
import { useGetMyOrders } from "@/services/Order";
import OrderCardSkeleton from "./OrderCardSkeleton";

const statusColors: Record<string, string> = {
  paid: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-800",
  failed: "bg-red-100 text-red-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-indigo-100 text-indigo-700",
};

const UserOrderHistory: React.FC = () => {
  const { isLoading, data: orders, isError } = useGetMyOrders();

  if (isLoading) return <OrderCardSkeleton />;
  if (isError || !orders)
    return (
      <p className="text-center text-red-500 text-sm">
        Failed to load order history.
      </p>
    );

  return (
    <div className="space-y-4">
      {orders.length === 0 ? (
        <h3 className="text-muted-foreground text-sm italic text-center font-inter">
          You haven't placed any orders yet. Start shopping and your orders will
          appear here!
        </h3>
      ) : (
        orders.data.map((order) => (
          <motion.div
            key={order._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="rounded-sm font-inter gap-1">
              <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-1">
                <div className="w-full">
                  <div className="text-xs font-medium">
                    Order ID:{" "}
                    <span className="text-muted-foreground">{order._id}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge
                      className={
                        statusColors[order.orderStatus] ||
                        "bg-gray-100 text-gray-700"
                      }
                    >
                      {order.orderStatus}
                    </Badge>
                    <Badge
                      className={
                        statusColors[order.paymentStatus] ||
                        "bg-gray-100 text-gray-700"
                      }
                    >
                      {order.paymentStatus}
                    </Badge>
                    <Badge variant="outline">Rs.{order.totalPrice}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Separator className="my-1" />

                <div className="mb-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Payment Method:</strong>{" "}
                    {order.paymentMethod.replace("_", " ")}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Ordered On:</strong>{" "}
                    {format(new Date(order.createdAt), "PPP")}
                  </p>
                </div>

                <h4 className="font-medium mb-1 text-primary/90">Products</h4>
                <div className="space-y-3">
                  {order.products.map((item) => (
                    <div
                      key={`${order._id}-${item.product._id}`}
                      className="flex items-center gap-4"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-16 aspect-[3/2] object-cover rounded-md border"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.product.title}</p>
                        <p className="text-sm text-muted-foreground">
                          Rs.{item.product.price} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-sm text-green-500">
                        Rs.{item.product.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default UserOrderHistory;
