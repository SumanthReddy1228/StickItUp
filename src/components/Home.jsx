import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products";
export default function Home() {
  return (
    <div className="mx-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers">
        Welcome to EazyStore – discover amazing deals and a seamless shopping
        experience every day!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
