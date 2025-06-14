import { useForm, Controller } from "react-hook-form";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface EditOrderProps {
  onSuccess: () => void;
  id: string;
  orderStatus: string;
  paymentStatus: string;
}

interface OrderStatusOption {
  name: string;
  value: string;
}

interface PaymentStatusOption {
  name: string;
  value: string;
}

const paymentStatuses: PaymentStatusOption[] = [
  { name: "Pending", value: "pending" },
  { name: "Paid", value: "paid" },
  { name: "Failed", value: "failed" },
];

const orderStatuses: OrderStatusOption[] = [
  { name: "Processing", value: "processing" },
  { name: "Shipped", value: "shipped" },
  { name: "Delivered", value: "delivered" },
  { name: "Cancelled", value: "cancelled" },
];

const EditOrder = ({
  onSuccess,
  id,
  orderStatus,
  paymentStatus,
}: EditOrderProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      orderStatus,
      paymentStatus,
    },
  });

  const onSubmit = (data: any) => {
    const dataWithId = { ...data, productId: id };
    console.log(dataWithId);
  };

  return (
    <div className="space-y-6 font-inter">
      <DialogHeader>
        <DialogTitle className="text-xl">Edit Order</DialogTitle>
        <DialogDescription>
          Update the status of the order. Make sure to double-check before
          saving.
        </DialogDescription>
      </DialogHeader>

      <Separator />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-2">
          <Label htmlFor="orderStatus">Order Status</Label>
          <Controller
            name="orderStatus"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Please select an order status" />
                </SelectTrigger>
                <SelectContent>
                  {orderStatuses.map((el) => (
                    <SelectItem key={el.value} value={el.value}>
                      {el.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="paymentStatus">Payment Status</Label>
          <Controller
            name="paymentStatus"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Please select payment status" />
                </SelectTrigger>
                <SelectContent>
                  {paymentStatuses.map((el) => (
                    <SelectItem key={el.value} value={el.value}>
                      {el.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default EditOrder;
