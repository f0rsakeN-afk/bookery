import React, { useState } from "react";
/* import { motion } from "motion/react"; */
import { Funnel } from "lucide-react";
import { useGetAllProducts } from "@/services/product";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import ProductTile from "@/components/shared/ProductTile";
import Filter from "@/components/allproducts/Filter";

const AllProducts: React.FC = () => {
  const [filters, setFilters] = useState({
    category: "",
    price: [100000],
    sort: "",
    page: 1,
    limit: 12,
  });

  const { data: productData, isLoading } = useGetAllProducts(filters);

  const products = productData?.data || [];
  const pagination = productData?.pagination;

  return (
    <div className="container mx-auto px-4 xl:px-0 max-w-6xl py-6 xl:py-8">
      {/* Header */}
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2 font-playfair text-primary/90">
          All Products
        </h1>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Funnel className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4 w-64 space-y-4">
            <Filter filters={filters} setFilters={setFilters} />
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Products Grid */}
      {isLoading ? (
        <Loader />
      ) : products.length === 0 ? (
        <p className="text-center text-muted-foreground mt-6">
          No products found.
        </p>
      ) : (
        <section className="grid gap-6 mt-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] md:grid-cols-3 xl:grid-cols-4">
          {products.map((el) => (
            <ProductTile el={el} key={el.id} />
          ))}
        </section>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (filters.page > 1) {
                      setFilters((prev) => ({
                        ...prev,
                        page: prev.page - 1,
                      }));
                    }
                  }}
                />
              </PaginationItem>

              {/* Page numbers */}
              {Array.from({ length: pagination.totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      isActive={filters.page === pageNum}
                      onClick={(e) => {
                        e.preventDefault();
                        if (filters.page !== pageNum) {
                          setFilters((prev) => ({
                            ...prev,
                            page: pageNum,
                          }));
                        }
                      }}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (filters.page < pagination.totalPages) {
                      setFilters((prev) => ({
                        ...prev,
                        page: prev.page + 1,
                      }));
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
