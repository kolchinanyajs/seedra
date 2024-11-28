"use client";
import Cards from "@/components/Cards";
import Container from "@/components/Container";
import React, { useEffect, useState } from "react";

const Favorite = () => {
  return (
    <Container>
      <Cards cards={JSON.parse(localStorage.getItem("favorites") || "[]")} />
    </Container>
  );
};

export default Favorite;
