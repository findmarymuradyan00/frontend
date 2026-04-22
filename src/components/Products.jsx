import ProductItem from "./ProductItem";

export default function Products({ products, onMove }) {
  return (
    <div className="col-md-7">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductItem product={product} onMove={onMove} />
        ))}
      </div>
    </div>
  );
}
