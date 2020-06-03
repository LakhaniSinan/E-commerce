import React from 'react'
import './CheckOut.scss'
import CheckOutItems from '../../components/CheckOutItems/CheckOutItems'
import { connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart-selectors'
import StripeButton from '../StripeButton/StripeButton'

const CheckOut = ({cartItems,total}) => {
    console.log(cartItems,total,'logss');
    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Price
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>
                
            </div>
          {
              cartItems.map(cartItem=>
               <CheckOutItems items={cartItem} key={cartItem.id}/>
              )
          }
          <div className="total">
        <span>TOTAL :${total}</span>
          </div>
          <StripeButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps,null)(CheckOut)