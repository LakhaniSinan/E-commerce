import React from 'react'
import './PreviewItems.scss'
import MyButton from '../MyButton/MyButton'
import {connect} from 'react-redux'
import { AddItem } from '../../redux/cart/cart-actions'

const PreviewItems = ({item,AddItem}) =>{
    const{imageUrl,name,price,id}=item
    console.log(imageUrl,name,price,id);
    
    
    return (
       <div className="main-style">
           <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
               <div className="collection-footer">
               <span>{name}</span>
               <span>${price}</span>
               </div>
                <MyButton inverted onClick={()=>AddItem(item)} >Add To Cart</MyButton>
           </div>
       
    )
}
const mapDispatchToProps = dispatch => ({
    AddItem:item=>dispatch(AddItem(item))
})
export default connect(null,mapDispatchToProps)(PreviewItems)