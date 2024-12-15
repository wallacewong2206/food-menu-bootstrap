export default function MenuSection({ title, items }) {
  return (
    <div className="mb-5">
      <h2 className="mb-4 text-center">{title}</h2>
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top rounded-start p-3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
