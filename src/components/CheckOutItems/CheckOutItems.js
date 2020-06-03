import React from 'react'
import {connect} from 'react-redux'
import './CheckOutItems.scss'
import {ClearItem,AddItem,RemoveItem } from '../../redux/cart/cart-actions'

const CheckOutItems = ({items,clearItem,AddItem,RemoveItem})=>{
    console.log(items,'item');
    
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={items.imageUrl}/>
           </div>
           <span className="name">
             {items.name}
           </span>
           <span className="qunatity">
            <div className="arrow" onClick={()=>RemoveItem(items)}>&#10094;</div>
           <span className="value">{items.quantity}</span>
           <div className="arrow" onClick={()=>AddItem(items)}>&#10095;</div>
           </span>
           <span className="price">
           {items.price}
           </span>
           <div className="remove-button" onClick={()=>clearItem(items)}>
              &#10005;
           </div>
          
         
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem:item=>dispatch(ClearItem(item)),
    AddItem:item=>dispatch(AddItem(item)),
    RemoveItem:item=>dispatch(RemoveItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckOutItems)