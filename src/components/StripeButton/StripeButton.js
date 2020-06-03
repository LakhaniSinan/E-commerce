import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price})=>{
    const priceToProcess = price * 100
    const key= 'pk_test_gjkb9zN4wklPGDfNB6FuORl7006WJR48uM'
    
  const onToken = token =>{
        console.log(token);
        alert('Payment Successful')
        
    }
    return(
     <StripeCheckout
      label= "Pay Now"
      name=  "Lakhani's Clothing"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total is ${price}`}
      amount={priceToProcess}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
     />
    )

}


export default StripeButton