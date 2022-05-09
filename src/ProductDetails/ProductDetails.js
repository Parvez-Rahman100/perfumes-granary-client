import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { perfumeId } = useParams();
    const [perfume,setPerfume] = useState({});
    // console.log(perfume);
    useEffect(()=>{
        const url = `https://perfumes-granary.herokuapp.com/productDetails/${perfumeId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPerfume(data))
    },[perfumeId]);


    const handleUpdateProducts = event => {
        event.preventDefault();

        const quantity = parseInt(event.target.quantity.value);
        // const newQuantity = (quantity + parseInt(product.quantity))
        console.log(quantity);

        fetch(` https://perfumes-granary.herokuapp.com/productDetails/${perfumeId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert("Product Updated");
                event.target.reset();
            })
    }


    const handleDeleveredProduct = event =>{
        const newQuantity = parseInt(perfume.quantity) - 1;
        // console.log(quantity);
        fetch(` https://perfumes-granary.herokuapp.com/productDetails/${perfumeId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ newQuantity }  )
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('quantity updated');
                setPerfume(result)
                console.log(perfume);
                
            });
    }
    return (
        <div className='w-50 my-3 mx-auto'>
            <form className='d-flex flex-column' onSubmit={handleUpdateProducts}>
                    <input placeholder='Quantity' type="number" name="quantity" id="" />
                    <input className='btn w-25 mx-auto btn-primary mt-3' type="submit" value="Add Quantity" />
                </form>

                <div className='d-flex justify-content-center align-items-center my-5'>
           <div className="card" style={{width: '18rem'}}>
        <img src={perfume.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{perfume.name}</h5>
            <p className="card-text">{perfume.details}</p>
            <h5>Quantity :{perfume.quantity}</h5>
            <h4>Price : {perfume.price}</h4>
            <h5>Suppilier : {perfume.supplier}</h5>
            <button onClick={handleDeleveredProduct} className='btn btn-primary'>Deliver Product</button>
        </div>
        </div>
        </div>
        </div>
        
    );
};

export default ProductDetails;