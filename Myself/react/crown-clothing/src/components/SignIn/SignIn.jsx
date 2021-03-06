import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss'
import CustomButton from '../CustomButton/CustomButton';
import { auth, sighInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {

  state = {
    email:'',
    password:''
  }

  handleSubmit = async event => {
     event.preventDefault()
     const {email,password} = this.state

     try {
       await auth.signInWithEmailAndPassword(email,password)
       this.setState({email:'',password:''})
     } catch(error){
       console.warn(error)
     }
  }

  handleChange = event => {
    const { value , name} = event.target
    this.setState({[name]:value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email} 
            required
          />
          <FormInput 
            type="password" 
            name="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password} 
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={sighInWithGoogle} isGoogleSignin>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;