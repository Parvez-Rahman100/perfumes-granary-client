import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { perfumeId } = useParams();
    const [perfume,setPerfume] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/productDetails/${perfumeId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPerfume(data))
    },[perfumeId]);
    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
           <div className="card" style={{width: '18rem'}}>
        <img src={perfume.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{perfume.name}</h5>
            <p className="card-text">{perfume.details}</p>
            <h5>Quantity :{perfume.quantity}</h5>
            <h4>Price : {perfume.price}</h4>
            <h5>Suppilier : {perfume.supplier}</h5>
            <button className='btn btn-primary'>Deliver Product</button>
        </div>
        </div>
        </div>
    );
};

export default ProductDetails;