export default function Basket({ basket, onAdd, onRemove, onReduce }) {
  return (
    <div className="col-md-5">
      <h2 className="mb-3">Basket</h2>

      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {basket.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                Your basket is empty
              </td>
            </tr>
          ) : (
            basket.map((basketItem) => (
              <tr key={basketItem.id}>
                <td>{basketItem.title}</td>
                <td>${basketItem.price}</td>
                <td>{basketItem.quantity}</td>
                <td className="fw-bold text-success">
                  ${basketItem.quantity * basketItem.price}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => onAdd(basketItem)}
                    className="btn btn-sm btn-success me-1"
                  >
                    +
                  </button>

                  <button
                    onClick={() => onReduce(basketItem)}
                    className="btn btn-sm btn-warning me-1"
                    disabled={basketItem.quantity === 0}
                  >
                    -
                  </button>

                  <button
                    onClick={() => onRemove(basketItem)}
                    className="btn btn-sm btn-danger"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
