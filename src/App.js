import React from 'react';
import HomePage from './components/HomePage/HomePage'
import {Route, Switch,Redirect}  from 'react-router-dom'
import Header from './components/Header/Header'
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp'
import ShopPage from './components/shopPage/shopPage'
import './App.css';
import {connect} from 'react-redux'
import { setCurrentUser } from "./redux/User/user-actions";
import { auth,UserProfile } from './firebase/firebase'
import {createStructuredSelector} from 'reselect'
import CheckOut from './components/CheckOut/CheckOut'
import { selectCurrentUser } from './redux/User/user-selector'
 
class App extends React.Component {


  unSubUser=null

  componentDidMount(){
   this.unSubUser=auth.onAuthStateChanged( async userAuth=>{
     if(userAuth){
    const userRef= await UserProfile(userAuth)
   
    

    userRef.onSnapshot(snapshot=>{
     
      
      this.props.setCurrentUser({
             id:snapshot.id,
          ...snapshot.data()
 })
    })
  }
    else{
       this.props.setCurrentUser(userAuth)
    }
  })
  }

  componentWillUnmount(){
    this.unSubUser()
  }
  render(){
    
  return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route   path='/shop' component={ShopPage}/>
        <Route  exact path='/checkout' component={CheckOut}/>
        <Route exact path='/signIn' 
        render={()=>
        this.props.currentUser?
        (<Redirect to="/" />
        ) : (
        <SignInAndSignUp/>
        )} />
        </Switch>
      </div>
  )
  };
}
const mapStateToProps= createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user)) // here at dispatch redux says what ever object you are passing me it is going to be an action object
  
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
