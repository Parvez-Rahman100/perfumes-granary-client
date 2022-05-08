import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://perfumes-granary.herokuapp.com/productDetails/`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result => {
        
            console.log(result)
        });

        
    };
    return (
       <div className='w-50 mx-auto' >
        <h1 className='text-center text-danger my-3'>Add Your Product</h1>
           <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
           <input className='my-2' placeholder='Photo URL' {...register("img")} />
        <input className='my-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
        <textarea className='my-2' placeholder='Details' {...register("details")} />
        <input className='my-2' placeholder='Quantity' {...register("quantity")} />
        <input className='my-2' placeholder='Price' type="number" {...register("price")} />
        <input className='my-2' placeholder='Supplier Name' {...register("supplier")} />
        <input className='btn btn-primary w-50 mx-auto' type="submit" value='Add Product' />
      </form>
        
       </div>
    );
};

export default AddProduct;