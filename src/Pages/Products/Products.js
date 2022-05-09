import React from 'react';
import AllProducts from '../../AllProducts/AllProducts';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [perfumes] = useProducts();
    return (
        <div>
            <h1 className='text-center text-dark my-3'>Our Products</h1>
           <div className='container'>
            <div className='row g-5 my-4'>
            {
                perfumes.map(perfume => <AllProducts key={perfume._id}
                perfume={perfume}
                ></AllProducts>)
            }
            </div>
            </div>
        </div>
    );
};

export default Products;