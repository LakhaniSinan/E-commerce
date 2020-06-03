import React from 'react'
import CollectionOverView from '../CollectionOverView/CollectionOverView'
import Preview from '../PreviewCollection/Preview'
import {Route} from 'react-router-dom'
import Category from '../Category/Category'

const shopPage  = ({match}) =>{
    console.log(match.path,'path');
    
      return (
            <div>
            <Route exact path={`${match.path}`} component={CollectionOverView}  /> 
            <Route exact path={`${match.path}/:caterogyId`} component= {Category} />
            </div>
        )
    
}


export default shopPage