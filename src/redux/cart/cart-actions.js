import {SHOW_CART,ADD_ITEM,CLEAR_ITEM,REMOVE_ITEM} from './cart-types'

export const toggleCart = ()=>({
    type:SHOW_CART,
  
})

export const AddItem = item =>({
    type:ADD_ITEM,
    payload:item
})

export const ClearItem = item =>({
    type:CLEAR_ITEM,
    payload:item
})

export const RemoveItem = item =>({
    type:REMOVE_ITEM,
    payload:item
})