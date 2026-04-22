export default function ProductItem({ product, onMove }) {
  return (
    <>
      <div className="col-md-4 my-3" key={product.id}>
        <img
          className="img-thumbnail"
          src={product.picture}
          width={200}
          alt=""
        />
        <p>{product.title}</p>
        <p className="text-danger">
          <strong>{product.price} USD</strong>{" "}
        </p>
        <button
          onClick={() => onMove(product)}
          className="btn btn-outline-dark"
        >
          Move
        </button>
      </div>
    </>
  );
}
