export const AddItemToCart = (cartItems,cartItemToAdd)=>{
    const existingCart = cartItems.find(cartItem=>cartItem.id === cartItemToAdd.id)

    if(existingCart){
        return cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}
            : cartItem
             
            )

    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const REmoveItemFromCart = (cartItems,cartItemToRemove) =>{
    const existingCart = cartItems.find(cartItem=>cartItem.id === cartItemToRemove.id)
    if(existingCart.quantity===1){
           return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
   cartItem=>cartItem.id ===cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1} : cartItem

    )
}