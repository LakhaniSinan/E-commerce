import React from 'react'
import FormInput from '../FormInput/FormInput'
import './SignIn.scss'  
import MyButton from '../MyButton/MyButton'
import { SignInWithGoogle} from '../../firebase/firebase'
import {auth,UserProfile} from '../../firebase/firebase'


class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
         event.preventDefault();
         const{ email,password}=this.state

         try{
             await auth.signInWithEmailAndPassword(email,password)
             this.setState({email:'',password:''})
         }
         catch(error){
             console.log(error.message);
             
         }
        
    }
    handleChange=event=>{
       
        const {value,name}=event.target
   
        this.setState({[name]:value})
    }
    render(){
        return ( 
           <div className="sign-in">
                <h2> I Already Have Account</h2>
                <span>Sign In With Your Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput  
                    name="email" 
                    value={this.state.email} 
                    required 
                    type="email" 
                    handleChange={this.handleChange} 
                    label="Email"
                    />
                  
                    <FormInput  name="password" value={this.state.password} required type="password" handleChange={this.handleChange} label="Password"/>
                
                     <div className="buttons">
                    <MyButton type="submit"> Sign In</MyButton>

                    <MyButton onClick={SignInWithGoogle} isGoogleSign > Google SIGN IN</MyButton>
                    </div>
                </form>
           </div>
        )
    }
}

export default SignIn