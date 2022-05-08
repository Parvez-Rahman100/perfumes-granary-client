import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ManageProducts = () => {
    const [perfumes,setPerfumes] = useProducts();
    // const { perfumeId } = useParams();
    const handleRemoveBtn = id =>{
        const confirmation = window.confirm('Are you sure?');
        if(confirmation){
            const url = `http://localhost:5000/productDetails/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data =>{
                const remaining = perfumes.filter(perfume=>perfume._id !== id)
                setPerfumes(remaining)
                console.log(data)
            });
            
        }
    }
    return (
        <div>
            <h1 className='text-center text-danger my-3'>Manage your products</h1>
            {
                perfumes.map(perfume => <>
                <div> 
            
            <div className='d-flex justify-content-around align-items-center border '>
                <div className='d-flex justify-content-around align-items-center'>
                    <img className='w-25 rounded-circle' src={perfume.img} alt="" />
                    <p>{perfume.name}</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <button onClick={()=>handleRemoveBtn(perfume._id)} className='btn btn-primary rounded'>Remove</button>
                </div>
            </div>
        </div>
                </>)
            }
        </div>
    );
};

export default ManageProducts;