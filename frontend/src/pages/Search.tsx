import React, { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchImage } from "@/utils/ImageExports";
import { cn } from "@/lib/utils";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>();

  const handleSearch = () => {};

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 py-8 md:py-10">
      <div className="grid grid-cols-7 gap-3 items-center">
        <div className="col-span-5 md:col-span-6">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-10 placeholder:text-inter placeholder:text-[16px] placeholder:tracking-wide"
            placeholder="Search Here"
          />
        </div>
        <Button
          variant="outline"
          className="rounded-full h-10 col-span-2 md:col-span-1 font-inter"
          onClick={handleSearch}
        >
          <Search />
          Search
        </Button>
      </div>
      <motion.div
        className={cn(
          "pt-10  items-center justify-center",
          query ? "hidden" : "flex"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={searchImage}
          alt="search image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
          className="rounded-sm md:h-[500px]"
        />
      </motion.div>
    </div>
  );
};

export default SearchPage;
