import React from 'react'
import './Button.scss'


const MyButton =({children,isGoogleSign,inverted,...otherProps})=>{
   
    
    return (
        <button className={`${inverted ? 'inverted':''} ${isGoogleSign ? 'google-sign':''} mybutton `} {...otherProps}>
            {children}
        </button>
    )
}

export default MyButton