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
           <div class="card" style={{width: '18rem'}}>
        <img src={perfume.img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{perfume.name}</h5>
            <p class="card-text">{perfume.details}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    );
};

export default ProductDetails;