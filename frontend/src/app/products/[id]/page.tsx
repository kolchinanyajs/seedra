import Container from "@/components/Container";
import React from "react";

const Product = ({ params }: { params: { id: string } }) => {
  return <Container>Product {params.id}</Container>;
};

export default Product;
