import React from 'react';
import './Cosmetic.css';
import { adToDb, removeFromDb } from '../../utilities/fakedb';
const Cosmetic = (props) => {
    const {id,name,price}  =  props.cosmetic;
    const addToCart = (id)=>{
        adToDb(id);
    }

    const removeFromCart = (id) =>{
        removeFromDb(id);
    }
    // const addToCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h1>Buy:{name}</h1>
            <h1>price:{price}</h1>
            <p>Id is :{id}</p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            <button onClick={()=> addToCart(id)}>Add To Cart</button>
            <button onClick={()=>removeFromCart(id) }>Remove</button>
        </div>
    );
};

export default Cosmetic;