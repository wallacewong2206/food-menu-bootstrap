import React from 'react';

export default function MenuItem({ name, price, image }) {
  return (
    <div className="d-flex align-items-center border-bottom py-3">
      <img
        src={image}
        alt={name}
        className="img-fluid rounded"
        style={{ width: '80px', height: '80px', marginRight: '20px' }}
      />
      <div className="d-flex justify-content-between w-100">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
}
