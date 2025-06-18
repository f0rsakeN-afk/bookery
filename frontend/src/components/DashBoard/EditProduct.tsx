import React, { useEffect, useState } from "react";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useUpdateProduct } from "@/services/dashboard";
import { productTypes } from "@/types/product";

interface editProductProps {
  product: productTypes;
  id: string;
  onSuccess: () => void;
}

const EditProduct: React.FC<editProductProps> = ({
  id,
  onSuccess,
  product,
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>();

  const form = useForm();
  const { control, handleSubmit, reset } = form;

  useEffect(() => {
    if (product.image) {
      setImagePreview(product.image);
    }
  }, [product.image]);

  const mutation = useUpdateProduct();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.warning("Image size should be less than 2MB");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: any) => {
    let dataImage = { ...data };

    if (imageFile) {
      dataImage = {
        ...dataImage,
        image: imageFile, 
      };
    }

    mutation.mutate(
      { data: dataImage, id: product._id },
      {
        onSuccess: () => {
          reset();
          onSuccess();
        },
      }
    );
  };

  return (
    <ScrollArea className="md:p-4 max-h-[70dvh]">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* image section */}
          <div className="flex flex-col items-center gap-4 p-4 border-2 border-dashed rounded-lg">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
              disabled={mutation.isPending}
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ) : (
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                  <ImagePlus className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
              <span className="text-sm text-muted-foreground">
                Click to upload product image
              </span>
            </label>
          </div>

          <FormField
            name="title"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    disabled={mutation.isPending}
                    placeholder="Product title"
                    defaultValue={product.title}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={mutation.isPending}
                    placeholder="Product description"
                    className="resize-none"
                    defaultValue={product.description}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={product.category}
                  disabled={mutation.isPending}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      defaultValue={product.price}
                      type="number"
                      placeholder="0.00"
                      {...field}
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      defaultValue={product.quantity}
                      type="number"
                      placeholder="0"
                      {...field}
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brand name"
                      defaultValue={product.brand}
                      {...field}
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount (%)</FormLabel>
                  <FormControl>
                    <Input
                      min={0}
                      max={60}
                      type="number"
                      placeholder="0"
                      defaultValue={product.discountPercentage}
                      {...field}
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-lg">Shipping Info</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FormField
                control={control}
                name="shippingWeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
                        disabled={mutation.isPending}
                        type="number"
                        step="any"
                        placeholder="0"
                        {...field}
                        min={0}
                        defaultValue={product.shipping.weight}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="shippingLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length (cm)</FormLabel>
                    <FormControl>
                      <Input
                        disabled={mutation.isPending}
                        type="number"
                        step="any"
                        defaultValue={product.shipping.dimensions.length}
                        placeholder="0"
                        {...field}
                        min={0}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="shippingWidth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Width (cm)</FormLabel>
                    <FormControl>
                      <Input
                        disabled={mutation.isPending}
                        type="number"
                        step="any"
                        min={0}
                        placeholder="0"
                        defaultValue={product.shipping.dimensions.width}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="shippingHeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input
                        disabled={mutation.isPending}
                        type="number"
                        step="any"
                        min={0}
                        placeholder="0"
                        defaultValue={product.shipping.dimensions.height}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Editing..." : "Edit Product"}
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default EditProduct;
