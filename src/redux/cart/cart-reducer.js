import {SHOW_CART,ADD_ITEM,CLEAR_ITEM,REMOVE_ITEM} from './cart-types'
import {AddItemToCart,REmoveItemFromCart} from './cart-utils'
const INITIAL_STATE={
    hidden:true,
    cartItems:[] 
}

const cartReducer = (state=INITIAL_STATE,action)=>{
     switch(action.type){
         case SHOW_CART:
         return {
             ...state,
             hidden:!state.hidden
         }
         case ADD_ITEM:
             return {
                 ...state,
                 cartItems:AddItemToCart(state.cartItems, action.payload)
             }
         case CLEAR_ITEM:
             return {
                 ...state,
                 cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
             }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems:REmoveItemFromCart(state.cartItems,action.payload)
            }
         default:
             return state
     }
}

export default cartReducer