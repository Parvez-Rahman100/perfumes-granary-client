import React from 'react';
import useProducts from '../hooks/useProducts';

const ManageProducts = () => {
    const [perfumes,setPerfumes] = useProducts();
    // const { perfumeId } = useParams();
    const handleRemoveBtn = id =>{
        const confirmation = window.confirm('Are you sure?');
        if(confirmation){
            const url = `https://perfumes-granary.herokuapp.com/productDetails/${id}`;
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
            <h1 className='text-center text-dark my-3'>Manage your products</h1>
            {
                perfumes.map(perfume => <div key={perfume._id}>
                    <div> 
            
            <div className='d-flex justify-content-around align-items-center border my-3 '>
                <div className='d-flex justify-content-around align-items-center'>
                    <img style={{height:'50px',width:'50px', borderRadius:'50%'}} src={perfume.img} alt="" />
                    <p className='ms-2'>{perfume.name}</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <button onClick={()=>handleRemoveBtn(perfume._id)} className='btn btn-primary rounded'>Remove</button>
                </div>
            </div>
        </div>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;