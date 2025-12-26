import ProductCard from "./ProductCard";

function ProductListings({ products }) {
  return (
    <div className="product-listings-container">
      <div className="product-listings-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
            ></ProductCard>
          ))
        ) : (
          <p className="product-listing-empty">No Product found</p>
        )}
      </div>
    </div>
  );
}

export default ProductListings;
