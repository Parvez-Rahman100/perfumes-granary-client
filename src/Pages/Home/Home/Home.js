import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Product/Product';
import Banner from '../Banner/Banner';
import villain from '../../../assets/villain.jpg';

const Home = () => {
    const [perfumes] = useProducts();
    return (
        <div>
            <Banner></Banner>
            <h1 className='my-3 text-primary text-center'>Our Products</h1>
            <div className='container'>
            <div className='row g-5'>
            {
                perfumes.slice(0,6).map(perfume => <Product key={perfume._id}
                perfume={perfume}
                ></Product>)
            }
                <div className='container'>
                <div className='d-flex  justify-content-center align-items-center border p-3 rounded '>
                    <div >
                        <img className='w-75' src={villain} alt="" />
                    </div>
                    <div className='bg-dark text-white p-3 rounded'>
                        <h2 className='text-danger text-center my-2'>New Arrival</h2>
                        <p className='ms-3'>Spice Hot, distinct, appealing and lingers enough to catch the undivided attention of your prey. Explore your villainous streak with all-new signature perfume Villain. This new fragrance with woody & spicy notes keeps body odour at bay and lasts long.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;