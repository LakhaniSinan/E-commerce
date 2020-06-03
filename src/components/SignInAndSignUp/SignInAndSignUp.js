import React from 'react'
import './SignInAndSignUp.scss'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

const SignInAndSignUp = ()=>{
    return (
        <div className="signInAndsignUp">
         <SignIn/>
         <SignUp/>
        </div>
    )
}

export default SignInAndSignUp;