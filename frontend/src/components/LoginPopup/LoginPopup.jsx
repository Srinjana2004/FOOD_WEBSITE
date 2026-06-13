// import React from 'react'
import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import axios from 'axios'
import { use } from 'react'
import { StoreContext } from '../../context/StoreContext'
// import { useEffect } from 'react'

const LoginPopup = ({setShowLogin}) => {
    const{url,setToken,token}=useContext(StoreContext);
    // localStorage.setItem("token",response.data.token)

    // const {url} = useContext(StoreContext);
    const[currState,setCurrState]=useState("Login")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(event)=>{
const name=event.target.name;
const value=event.target.value;
setData(data=>({...data,[name]:value}))
    }
    const onLogin=async (event)=>{
        event.preventDefault();
        let newUrl=url;
        if(currState==="Login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }
        const response=await axios.post(newUrl,data);
        if(response.data.success){
         localStorage.setItem("token", response.data.token)

        setToken(response.data.token)

        setShowLogin(false)
        }

    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

  return (
    <div className='login-popup'>
    <form  onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input name='name' onChange={handleChange} value={data.name} type="text" placeholder='Your name' required />}
            <input name='email' onChange={handleChange} value={data.email} type="email" placeholder='Your email' required/>
            <input name='password' onChange={handleChange} value={data.password} type="password" placeholder='password' required />
        </div>
        <button type='submit' >{currState==="Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use&privacy policy </p>
        </div>
        {
            currState==='Login'
            ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
    </form>
    </div>
  )
}

export default LoginPopup
