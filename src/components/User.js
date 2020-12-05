import React from 'react';
// import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product, selectStatus }) => {
  return (
    <Card className={`my-3 p-3 rounded ${selectStatus ? 'selected' : 'notSelected'}`}>
      {/* <input onChange={() => handleClick(id)} type="checkbox" checked={selectStatus} /> */}
      <div>
        <Card.Img style={{ height: '240px' }} src={product.Image} variant='top' />
      </div>
      <Card.Body>
        <div>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
