// import React from 'react'
// import './Verify.css'
// import { useSearchParams } from 'react-router-dom'

// const Verify = () => {
//     const searchParams = useSearchParams();
//     const success = searchParams.get("success");
//     const orderId = searchParams.get("orderId");
//     console.log(success,orderId);
//   return (
//     <div>
     
//     </div>
//   )
// }

// export default Verify

import React, { useContext,useEffect } from 'react'
import './Verify.css'
import { useSearchParams,useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Verify = () => {

    const [searchParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    // console.log(success, orderId);

   const verifyPayment=async()=>{
   const response=await axios.post(url+"/api/orders/verify",{orderId,success});
   if(response.data.success){
    navigate("/");
    }
    else{
        navigate("/");
    }
   }
   useEffect(()=>{
    verifyPayment();
   },[])

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    )
}

export default Verify
