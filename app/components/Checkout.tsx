"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useCartStore } from "@/util/store";
import { useState, useEffect } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Checkout() {
  const cartStore = useCartStore();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Create a PaymentIntent
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      }),
    })
      .then((res) => {
        console.log(res)
        // return res.json();
      })
  }, []);

  return (
    <div>Checkout Page</div>
  )
}
