import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllProducts = ({perfume}) => {
    const {name,_id,details,img,quantity,supplier,price} = perfume;
    const navigate = useNavigate();
    const handleOrder = _id =>{
        navigate(`/productDetails/${_id}`);
    }
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
        <Button onClick={()=>handleOrder(_id)} variant="primary">Order</Button>
    </Card.Body>
    </Card>
        </div>
        
    </div>
    );
};

export default AllProducts;