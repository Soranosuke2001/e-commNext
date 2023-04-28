"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useCartStore } from "@/util/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Checkout() {
  const cartStore = useCartStore();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const router = useRouter();

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
      .then((res) => res.json())
      .then((data) => {
        console.log("this is working");
        console.log(data);
      })
      .catch((err) => {
        console.log("there was an error");
        console.log(err);
      });
  }, []);

  return <div>Checkout Page</div>;
}
