import Categories from "@/components/Categories";
import Container from "@/components/Container";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsNavigation from "@/components/ProductsNavigation";
import { fetchData } from "@/utils/fetchData";
import React from "react";

export default async function Products() {
  const url = process.env.BACKEND_URL || "/";
  const { products } = await fetchData(url);

  return (
    <Container>
      <ProductsNavigation />
      <Categories />
      <ProductsGrid products={products} />
    </Container>
  );
}
