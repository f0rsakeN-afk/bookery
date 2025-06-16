import { Controller, useForm } from "react-hook-form";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ScrollArea } from "../ui/scroll-area";
import { toast } from "sonner";
import { useCreateOrder } from "@/services/Order";

const CheckoutDialog = ({ items, onSuccess }) => {
  /*   console.log(items) */
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createOrderMutation = useCreateOrder();

  const onSubmit = (data) => {
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      toast.error("Please fill all the required fields correctly.");
      return;
    }

    const payload = {
      ...data,
      products: items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
    };
    console.log(payload);
    createOrderMutation.mutate(
      { data: payload },
      {
        onSuccess: () => {
          reset();
          onSuccess();
        },
      }
    );
  };

  return (
    <div className="font-inter space-y-4">
      <DialogHeader>
        <DialogTitle>Checkout</DialogTitle>
      </DialogHeader>

      <ScrollArea className="h-60 border rounded-md p-2">
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item._id} className="flex gap-3 items-start">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="aspect-[3/2] w-24 rounded-md object-cover border"
              />
              <div className="space-y-1">
                <p className="font-medium text-sm">{item.product.title}</p>
                <p className="text-sm text-muted-foreground">
                  Qty: {item.quantity} | Price: Rs.
                  {item.product.priceAfterDiscount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="paymentMethod"
          control={control}
          defaultValue="cash_on_delivery"
          rules={{ required: true }}
          render={({ field }) => (
            <div className="space-y-2">
              <Label className="block">Payment Method</Label>
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="esewa" id="esewa" />
                  <Label htmlFor="esewa">eSewa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="cash_on_delivery"
                    id="cash_on_delivery"
                    disabled={createOrderMutation.isPending}
                  />
                  <Label htmlFor="cash_on_delivery">Cash on Delivery</Label>
                </div>
              </RadioGroup>
            </div>
          )}
        />

        <div className="space-y-2">
          <Label>Address</Label>
          <Input
            {...register("shippingInfo.address", { required: true })}
            disabled={createOrderMutation.isPending}
          />

          <Label>City</Label>
          <Input
            {...register("shippingInfo.city", { required: true })}
            disabled={createOrderMutation.isPending}
          />

          <Label>Phone</Label>
          <Input
            disabled={createOrderMutation.isPending}
            type="tel"
            {...register("shippingInfo.phone", {
              required: true,
              pattern: /^[0-9]{7,15}$/,
            })}
          />

          <Label>Postal Code</Label>
          <Input
            {...register("shippingInfo.postalCode", { required: true })}
            disabled={createOrderMutation.isPending}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={createOrderMutation.isPending}
        >
          {createOrderMutation.isPending ? "Submitting" : "Submit order"}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutDialog;
