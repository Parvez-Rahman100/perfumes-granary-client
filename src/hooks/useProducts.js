import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [perfumes,setPerfumes] = useState([])
    useEffect(()=>{
        const url = 'http://localhost:5000/product';
        fetch(url)
        .then(res => res.json())
        .then(data => setPerfumes(data))
    },[]);
    return [perfumes,setPerfumes];
};

export default useProducts;