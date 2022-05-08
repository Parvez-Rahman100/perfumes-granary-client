import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [perfumes,setPerfumes] = useState([])
    useEffect(()=>{
        const url = 'https://perfumes-granary.herokuapp.com/product';
        fetch(url)
        .then(res => res.json())
        .then(data => setPerfumes(data))
    },[]);
    return [perfumes,setPerfumes];
};

export default useProducts;