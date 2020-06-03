import React from 'react'
import './Cart.scss'

const Cart = ({item})=>{
    console.log(item,'in cart');
    
    return (
       <div className="cart-item">
           <img src={item.imageUrl} alt='Item Image'/>
           <div className="item-details">
               <span className="name">
                   {item.name}
               </span>
               <span className="name">
       {item.quantity} x ${item.price}
 </span>

           </div>
       </div>
    )
}

export default Cart