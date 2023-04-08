const add = (a,b)=>{
    return a+b;
}
// export default add;
const multiply = (a,b)=>{
    return a*b;
}

// const numbers = [10,20,30,40];
// const sum = (previous,current) => previous+current;
// const total =(sum,0);
// console.log(total);


// const item = [
//     {id: 1,name:'Ovi',price:100},
//     {id: 1,name:'O',price:100},
//     {id: 1,name:'kOvi',price:100},
//     {id: 1,name:'bOvi',price:100},
// ]

// const sum = (previous,current)=> previous+current.price;
// const total = item.reduce(sum,0);


const getTotalPrice = product =>{
    const sum = (previous,current) => previous+current.price;
    const total = product.reduce(sum,0);
    return total;
}


export {add,multiply, getTotalPrice as getTotal }