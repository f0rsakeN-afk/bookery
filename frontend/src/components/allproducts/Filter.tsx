import { SortAsc, RefreshCcw } from "lucide-react";
import { filterProps } from "@/types/filter";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "../ui/button";
/* import { Slider } from "../ui/slider"; */

const Filter = ({ filters, setFilters }: filterProps) => {
  const handleReset = () =>
    setFilters({
      category: "",
      price: [100000],
      sort: "",
      page: 1,
      limit: 12,
    });

  return (
    <div>
      {/* Price */}
      {/*   <div>
        <label className="text-sm font-medium">Price Range</label>
        <Slider
          value={filters.price}
          max={100000}
          min={1000}
          draggable
          step={1000}
          onValueChange={(val) =>
            setFilters((prev) => ({ ...prev, price: val }))
          }
          className="mt-3"
        />

        <p className="text-xs text-muted-foreground mt-1">
          Up to Rs. {filters.price[0]}
        </p>
      </div> */}

      {/* Category */}
      <div>
        <label className="text-sm font-medium">Category</label>
        <Select
          value={filters.category}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value }))
          }
        >
          <SelectTrigger className="mt-1 w-full">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="lifestyle">Lifestyle</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sort */}
      <div className="py-1">
        <label className="text-sm font-medium flex items-center gap-1">
          <SortAsc className="w-4 h-4 text-muted-foreground" />
          Sort By
        </label>
        <Select
          value={filters.sort}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, sort: value }))
          }
        >
          <SelectTrigger className="mt-1 w-full">
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-createdAt">Newest First</SelectItem>
            <SelectItem value="createdAt">Oldest First</SelectItem>
            <SelectItem value="price">Price: Low to High</SelectItem>
            <SelectItem value="-price">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reset */}
      <Button
        variant="outline"
        className="w-full flex items-center gap-2"
        onClick={handleReset}
      >
        <RefreshCcw className="w-4 h-4" />
        Reset Filters
      </Button>
    </div>
  );
};

export default Filter;
