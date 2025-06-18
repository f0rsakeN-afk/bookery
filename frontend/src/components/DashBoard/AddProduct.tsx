import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";
import { useAddProduct } from "@/services/dashboard";

interface ProductFormData {
  title: string;
  description: string;
  price: string;
  quantity: string;
  category: string;
  brand: string;
  discountPercentage: string;
  shippingWeight: string;
  shippingLength: string;
  shippingWidth: string;
  shippingHeight: string;
}

interface addProductProps {
  onSuccess: () => void;
}

const AddProduct = ({ onSuccess }: addProductProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const mutation = useAddProduct();

  const form = useForm<ProductFormData>({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
      brand: "",
      discountPercentage: "0",
      shippingWeight: "",
      shippingLength: "",
      shippingWidth: "",
      shippingHeight: "",
    },
  });

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

  const onSubmit = (data: ProductFormData) => {
    try {
      if (!imageFile) {
        toast.warning("Please upload a product image");
        return;
      }

      if (data.title.trim().length < 5) {
        toast.warning("Title must be at least 5 characters long");
        return;
      }

      if (data.description.trim().length < 10) {
        toast.warning("Description must be at least 10 characters long");
        return;
      }

      if (isNaN(Number(data.price)) || Number(data.price) <= 0) {
        toast.warning("Please enter a valid price");
        return;
      }

      if (isNaN(Number(data.quantity)) || Number(data.quantity) < 0) {
        toast.warning("Please enter a valid quantity");
        return;
      }

      if (!data.category) {
        toast.warning("Please select a category");
        return;
      }

      if (data.brand.trim().length < 2) {
        toast.warning("Brand name must be at least 2 characters long");
        return;
      }

      const discountPercent = Number(data.discountPercentage);
      if (
        isNaN(discountPercent) ||
        discountPercent < 0 ||
        discountPercent > 60
      ) {
        toast.warning("Discount must be between 0% and 60%");
        return;
      }

      const shippingFields = [
        { name: "Weight", value: data.shippingWeight },
        { name: "Length", value: data.shippingLength },
        { name: "Width", value: data.shippingWidth },
        { name: "Height", value: data.shippingHeight },
      ];

      for (const field of shippingFields) {
        const numValue = Number(field.value);
        if (isNaN(numValue) || numValue <= 0) {
          toast.warning(`${field.name} must be a valid number greater than 0`);
          return;
        }
      }

      const productData = {
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
        discountPercentage: discountPercent,
        image: imageFile,
        shipping: {
          weight: Number(data.shippingWeight),
          dimensions: {
            length: Number(data.shippingLength),
            width: Number(data.shippingWidth),
            height: Number(data.shippingHeight),
          },
        },
      };

      mutation.mutate(productData, {
        onSuccess: () => {
          setImageFile(null);
          setImagePreview(null);
          form.reset();
          onSuccess();
        },
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <ScrollArea className="md:p-4 max-h-[70dvh]">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Image Upload */}
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

          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product title"
                    {...field}
                    disabled={mutation.isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={mutation.isPending}
                    placeholder="Product description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
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
            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0.00"
                      {...field}
                      disabled={mutation.isPending}
                      min={0}
                      step="any"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      {...field}
                      disabled={mutation.isPending}
                      min={0}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Brand */}
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brand name"
                      {...field}
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Discount Percentage */}
            <FormField
              control={form.control}
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
              {/* Weight */}
              <FormField
                control={form.control}
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
                        min={0.01}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Length */}
              <FormField
                control={form.control}
                name="shippingLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length (cm)</FormLabel>
                    <FormControl>
                      <Input
                        disabled={mutation.isPending}
                        type="number"
                        step="any"
                        placeholder="0"
                        {...field}
                        min={0.01}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Width */}
              <FormField
                control={form.control}
                name="shippingWidth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Width (cm)</FormLabel>
                    <FormControl>
                      <Input
                        disabled={mutation.isPending}
                        type="number"
                        step="any"
                        placeholder="0"
                        {...field}
                        min={0.01}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Height */}
              <FormField
                control={form.control}
                name="shippingHeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input
                        disabled={mutation.isPending}
                        type="number"
                        step="any"
                        placeholder="0"
                        {...field}
                        min={0.01}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Adding product..." : "Add Product"}
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default AddProduct;
