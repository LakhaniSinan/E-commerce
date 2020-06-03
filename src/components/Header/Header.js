import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {createStructuredSelector} from 'reselect'
import { auth } from '../../firebase/firebase'
import {connect} from 'react-redux'
import { ReactComponent as Logo} from '../../assests/crown.svg' 
import CartIcon from '../CartIcon/CartIcon'
import CartDrop from '../CartDrop/CartDrop'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/User/user-selector'

const Header = ({currentUser,hidden}) =>{
    return (
        <div className="header">
        <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>
       <div className="options">
       <Link className="option" to="/shop">
           SHOP
       </Link>
       <Link className="option" to="/shop">
           CONTACT US
       </Link>
       {
           currentUser ?
           <div className="option" onClick={()=>auth.signOut()}>
             SIGN OUT
           </div>
           :
           <Link className="option" to="/SignIn"> SIGN IN</Link>
       }
       <CartIcon/>
       </div>
       {hidden ? null:
       <CartDrop/>
}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
currentUser:selectCurrentUser,
hidden:selectCartHidden    
})

export default connect(mapStateToProps)(Header)