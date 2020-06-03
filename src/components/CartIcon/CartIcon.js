import React from 'react'
import './CartIcon.scss'
import {connect} from 'react-redux'
import { toggleCart} from '../../redux/cart/cart-actions'
import {selectCartItemsCount } from '../../redux/cart/cart-selectors'

const CartIcon=({toggleCart,items})=>{
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <img  src={require('../../assests/online.png')} className="shopping-icon"/>
            <span className="item-count">{items}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
        toggleCart:()=>dispatch(toggleCart())
})
const mapStateToProps = state => ({
    items:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)