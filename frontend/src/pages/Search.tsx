import React from "react";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchProducts } from "@/services/search";
import { productTypes } from "@/types/product";
import ProductTile from "@/components/shared/ProductTile";
import Loader from "@/components/shared/Loader";

interface FormValues {
  query: string;
}

const SearchPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const { data: queryData, isLoading, isError } = useSearchProducts(searchTerm);

  const onSubmit = (data: FormValues) => {
    setSearchTerm(data.query.trim());
  };

  return (
    <section className="container mx-auto max-w-6xl px-4 py-6 xl:py-12">
      {/* Search Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-4 font-inter">
          <Input
            type="text"
            placeholder="Search products by name, category..."
            {...register("query", { required: "This field is required" })}
            className="w-full h-11 md:flex-1 text-base placeholder:text-muted-foreground"
          />
          <Button
            type="submit"
            variant="default"
            className="h-11 px-6 gap-2 flex items-center sm:w-full md:w-auto"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </Button>
        </div>
      </form>

      {/* Results */}
      <div className="mt-10 min-h-[200px]">
        {isLoading && <Loader />}

        {isError && (
          <p className="text-center text-sm text-destructive">
            Something went wrong. Please try again.
          </p>
        )}

        {queryData?.data?.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">
            No results found.
          </p>
        )}

        {queryData?.data?.length > 0 && (
          <div className="grid gap-6 mt-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] md:grid-cols-3 xl:grid-cols-4">
            {queryData.data.map((product: productTypes) => (
              <ProductTile key={product.id} el={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
