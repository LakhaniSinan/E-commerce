import React from 'react'
import {connect} from 'react-redux'
import {SelectCategory} from '../../redux/shop/shop-selector'
import PreviewItems from '../PreviewCollectionItem/PreviewItems'
import './Category.scss'

const Category = ({collection}) =>{
   const {title,items} = collection
    
    return (
        <div className="category-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item=><PreviewItems key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
   
    return {
        collection:SelectCategory(ownProps.match.params.caterogyId)(state)
    }
}

export default connect(mapStateToProps)(Category)