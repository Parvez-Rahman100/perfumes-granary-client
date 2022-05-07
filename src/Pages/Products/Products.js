import React from 'react';
import AllProducts from '../../AllProducts/AllProducts';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [perfumes] = useProducts();
    return (
        <div>
           <div className='container'>
            <div className='row g-5'>
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