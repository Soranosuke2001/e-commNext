"use client";

import { useCartStore } from "@/util/store";

export default function Cart() {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);

  return (
    <div
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
      onClick={() => cartStore.toggleCart()}
    >
      <div className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">
        <h1>Cart Items</h1>
      </div>
    </div>
  );
}
