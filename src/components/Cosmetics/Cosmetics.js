import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../../utilities/calculation';


const Cosmetics = () => {
      const [cosmetics,setCosmetics]= useState([]);
      useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
      },[]);
    const total  = getTotal(cosmetics);
    return (
        <div>
             <h1>Here is th Cosmetics Header</h1>
             <h1>Total :{total}</h1>
            {
               cosmetics.map( cosmetic => <Cosmetic  cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;