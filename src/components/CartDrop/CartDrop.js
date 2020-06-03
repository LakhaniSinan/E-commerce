import React from 'react'
import MyButton from '../MyButton/MyButton'
import './CartDrop.scss'
import {connect} from 'react-redux'
import Cart from '../Cart/Cart'
import {toggleCart} from '../../redux/cart/cart-actions'
import {withRouter} from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart-selectors'
const CartDrop=({cartItems,history,dispatch})=>{
    return (
        <div className="cart-dropdown" >
            <div className="cart-items">
         {
             cartItems.length ? 
             cartItems.map(cartItem=>
                <Cart key={cartItem.id} item={cartItem}/>)
                :<span className="empty-message"> Your Cart Is Empty</span>
         }
            </div>
            <MyButton onClick={()=>{
                history.push('../checkout')
                dispatch(toggleCart())}}>
               GO TO CHECKOUT
            </MyButton>
        </div>
    )
}
const mapStateToProps = state=>{
    return {cartItems:selectCartItems(state)}
}


export default withRouter(connect(mapStateToProps,null)(CartDrop))
