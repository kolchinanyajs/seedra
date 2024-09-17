import Categories from "@/components/Categories";
import Container from "@/components/Container";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsNavigation from "@/components/ProductsNavigation";
import React from "react";

export default function Products() {
  return (
    <Container>
      <ProductsNavigation />
      <Categories />
      <ProductsGrid />
    </Container>
  );
}
