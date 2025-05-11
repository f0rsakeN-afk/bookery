import React from "react";
import { motion } from "motion/react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { useGetAllProducts } from "@/services/product";
import Loader from "@/components/shared/Loader";
import ProductTile from "@/components/shared/ProductTile";

const AllProducts: React.FC = () => {
  const { data: productData, isLoading } = useGetAllProducts();
  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto px-4 xl:px-0 max-w-6xl py-6">
      <motion.h1
        className="text-3xl font-bold flex items-center gap-2 font-playfair text-primary/90"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Products
      </motion.h1>

      <section
        className="grid gap-6 mt-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]"
      >
        {productData?.data?.map((el) => (
          <ProductTile el={el} key={el.id} />
        ))}
      </section>

      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {[1, 2, 3, 4].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink href="#">{page}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllProducts;
