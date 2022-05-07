import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({perfume}) => {
    const {name,id,details,img,quantity,supplier,price} = perfume;
    return (
        <div className='col-lg-4 col-sm-12 col-md-6'>
            <div  >
            <Card style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>${price}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <h5>Quantity : {quantity}</h5>
            <p>Supplier : {supplier}</p>
            {/* <Button onClick={handleCheckOut} variant="primary">Checkout</Button> */}
        </Card.Body>
        </Card>
            </div>
            
        </div>
    );
};

export default Product;