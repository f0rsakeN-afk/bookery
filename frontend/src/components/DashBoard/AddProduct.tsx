import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
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

interface ProductFormData {
  title: string;
  description: string;
  price: string;
  quantity: string;
  category: string;
  brand: string;
  discountPercentage: string;
}

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<ProductFormData>({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
      brand: "",
      discountPercentage: "0",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2000000) {
        // 2MB limit
        toast.warning("Image size should be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: ProductFormData) => {
    try {
      if (!imagePreview) {
        toast.warning("Please upload a product image");
        return;
      }

      if (data.title.length < 3) {
        toast.warning("Title must be at least 3 characters long");
        return;
      }

      if (data.description.length < 10) {
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

      if (data.brand.length < 2) {
        toast.warning("Brand name must be at least 2 characters long");
        return;
      }

      const discountPercent = Number(data.discountPercentage);
      if (
        isNaN(discountPercent) ||
        discountPercent < 0 ||
        discountPercent > 100
      ) {
        toast.warning("Please enter a valid discount percentage (0-100)");
        return;
      }

      console.log(data);
    } catch (error) {
      console.error(error);
      toast.warning("Something went wrong!");
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
                  <Input placeholder="Product title" {...field} />
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
                  onValueChange={field.onChange}
                  defaultValue={field.value}
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
                    <Input type="number" placeholder="0.00" {...field} />
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
                    <Input type="number" placeholder="0" {...field} />
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
                    <Input placeholder="Brand name" {...field} />
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
                    <Input type="number" placeholder="0" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            {/* {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding Product...
              </>
            ) : (
              "Add Product"
            )} */}
            Add Product
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default AddProduct;
