import React from 'react';
import { add, multiply } from '../../utilities/calculation';

const Shoes = () => {
    const a = 5;
    const b = 5;
    const result = multiply(a,b);
    const total = add(a,b);
    return (
        <div>
            <h1>This is shoes</h1>
            <p>result :{ result } and total: {total}</p>
            

        </div>
    );
};

export default Shoes;