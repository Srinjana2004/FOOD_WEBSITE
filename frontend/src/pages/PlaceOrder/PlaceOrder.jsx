// import React, { use, useContext } from 'react'
import React, { useContext, useState, useEffect, use } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
// import React, { useState } from 'react'

const PlaceOrder = () => {
  const{getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  const handleChange=(event)=>{
   const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  useEffect(()=>{
   console.log(data);
  },[data])

  const placeOrder=async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo={...item};
        itemInfo.quantity=cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    // console.log(orderItems);
    let orderData={
      address:data,
     items:orderItems,
      amount:getTotalCartAmount()+2,
    };
    let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
    const {session_url}=response.data;
    window.location.replace(session_url);
    }
    else{
      alert("Error.");
    }
  }
  const navigate=useNavigate();
  useEffect(()=>{
   if(!token){
    navigate('/cart');
   }
   else if(getTotalCartAmount()===0){
    navigate('/cart');
   }
  },[token])

  return (
   <form  className='place-order' onSubmit={placeOrder}>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
       <input required name='firstName' onChange={handleChange} value={data.firstName} type="text"  placeholder='First name' />
       <input required name='lastName' onChange={handleChange} value={data.lastName} type="text"  placeholder='last name' />
      </div>
       <input required name='email' onChange={handleChange} value={data.email} type="text"  placeholder='Email-addresss ' />
       <input required name='street' onChange={handleChange} value={data.street} type="text"  placeholder='Street' />
       <div className="multi-fields">
        <input required name='city' onChange={handleChange} value={data.city} type="text" placeholder='City' />
        <input required name='state' onChange={handleChange} value={data.state} type="text" placeholder='State' />
       </div>
     <div className="multi-fields">
        <input required name='zipcode' onChange={handleChange} value={data.zipcode} type="text" placeholder='Zip Code' />
        <input required name='country' onChange={handleChange} value={data.country} type="text" placeholder='Country' />
       </div>
       <input required name='phone' onChange={handleChange} value={data.phone} type="text" placeholder='Phone' /> 
       </div>
    <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>
                Subtotal
              </p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
           <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder
