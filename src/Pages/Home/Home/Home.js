import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Product/Product';
import Banner from '../Banner/Banner';

const Home = () => {
    const [perfumes] = useProducts();
    return (
        <div>
            <Banner></Banner>
            <h1 className='my-3 text-primary'>Our Products</h1>
            <div className='container'>
            <div className='row g-5'>
            {
                perfumes.slice(0,6).map(perfume => <Product key={perfume._id}
                perfume={perfume}
                ></Product>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;