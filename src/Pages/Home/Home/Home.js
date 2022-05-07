import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const Home = () => {
    const [perfumes,setPerfumes] = useState([])
    useEffect(()=>{
        const url = 'perfumes.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setPerfumes(data))
    },[])
    return (
        <div>
            <h1 className='my-3 text-primary'>Our Products</h1>
            <h2>length : {perfumes.length}</h2>
            <div className='container'>
            <div className='row g-5'>
            {
                perfumes.map(perfume => <Product key={perfume.id}
                perfume={perfume}
                ></Product>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;