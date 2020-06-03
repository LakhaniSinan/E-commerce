import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import './MainComponent.scss'
import {selectDirectorySections} from '../../redux/directory/directory-selector'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

const MainComponent = ({sections})=>{
    
return (
              <div className="menu">
             {
                   sections.map(({id,...otherProps})=> (
                               <MenuItems key={id} {...otherProps} />
                    ))
                     
             }
           </div>
        )
    }


const mapStateToProps = createStructuredSelector({

sections:selectDirectorySections
})

export default connect(mapStateToProps)(MainComponent)