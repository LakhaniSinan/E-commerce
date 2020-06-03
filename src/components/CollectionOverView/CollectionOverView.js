import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Preview from '../PreviewCollection/Preview'
import {selectCollections,selectToConvert} from '../../redux/shop/shop-selector'

const CollectionOverView = ({collections}) =>{
    return (
        <div className="collections-overview">
  {
                    collections.map(({id, ...otherProps})=>(
                        <Preview key={id} {...otherProps} />
                    ))
                }
        </div>

    )
}
const mapStateToProps = createStructuredSelector({
   
    collections:selectToConvert 
})

export default connect(mapStateToProps)(CollectionOverView)