import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers">
        Welcome to EazyStore – discover amazing deals and a seamless shopping
        experience every day!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch products. Please try again",
      { status: error.status } || 500
    );
  }
}
