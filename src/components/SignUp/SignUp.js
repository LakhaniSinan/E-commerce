import React from 'react'
import FormInput from '../FormInput/FormInput'
import MyButton from '../MyButton/MyButton'
import {auth,UserProfile} from '../../firebase/firebase'


class SignUp extends React.Component{
   constructor(props){
       super()
       this.state={
           displayName:'',
           email:'',
           password:'',
           confirmPassword:''
       }
   }

   handleSubmit = async event=>{
    event.preventDefault();
    const {displayName,email,confirmPassword,password} = this.state

    if(password !== confirmPassword)
    {
        alert('Password Dont Match')
        return;
    }
    try{
       
       const{user}= await auth.createUserWithEmailAndPassword(email,password)
        UserProfile(user,{displayName})
       this.setState({     
       displayName:'',
       email:'',
       password:'',
       confirmPassword:''})
    }
    catch(error){
        console.log(error.message,'erore');
        
    }
   }
   handleChange= event =>{
       const {name,value}= event.target
       this.setState({ [name]:value})
   }
   
    render(){
        const {displayName,email,confirmPassword,password} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I Do Not Have Account</h2>
                <span>Sign Up With Email And Password</span>

                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    />
                    <FormInput
                    type='email'
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />
                         <FormInput
                    type='password'
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                         <FormInput
                    type='password'
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="confirm Password"
                    required
                    />

                    <MyButton type="submit">Sign Up</MyButton>
                </form>
            </div>
        )
    }
}

export default SignUp
