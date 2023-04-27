"use client";

import { useCartStore } from "@/util/store";

export default function Cart() {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);

  return (
    <div>
      <h1>Cart Component</h1>
    </div>
  );
}
