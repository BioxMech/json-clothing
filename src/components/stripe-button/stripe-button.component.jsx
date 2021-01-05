import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51I662rKRdH5XvhBnudIUvROU46egvKHVVvyr5otPxpWaM4VaMcC0CaG5Zik6HOLVjwDVfNHmbHFBXexY1lLymFZT00GCy6IL72";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="JSON Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton