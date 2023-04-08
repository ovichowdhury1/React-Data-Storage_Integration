const adToDb = id =>{

    let shoppingCart ;

    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppingCart = JSON.parse(storeCart);
    }
    else{
        shoppingCart = {};
    }



    const quantity = shoppingCart[id];
    
    if (quantity) {
        // console.log('All ready exist');
        const newQuantity = parseInt(quantity)+1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id,newQuantity);
    } else {
        shoppingCart[id] = 1;
        // console.log('new item');
        // localStorage.setItem(id,1);
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

}


const removeFromDb = id =>{
    console.log(id);
    const storeCart = localStorage.getItem('shopping-cart');
    console.log(storeCart);
    if (storeCart) {
        const shoppingCart = JSON.parse(storeCart);
        if(id in shoppingCart){
            console.log('exist in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

        }
    } else {
        
    }
}


const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}
export {adToDb,removeFromDb,deleteShoppingCart};