"use client";

import formatPrice from "@/util/priceFormat";
import { useCartStore } from "@/util/store";
import Image from "next/image";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";

export default function Cart() {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);

  return (
    <div
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
      onClick={() => cartStore.toggleCart()}
    >
      <div
        className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Shopping Cart Items</h1>
        {cartStore.cart.map((item) => (
          <div className="flex py-4 gap-4">
            <Image
              className="rounded-md h-24"
              src={item.image}
              alt={`image of ${item.name}`}
              width={120}
              height={120}
            />
            <div>
              <h2>{item.name}</h2>
              <div className="flex gap-2">
                <h2>Quantity: {item.quantity}</h2>
                <button
                  onClick={() =>
                    cartStore.removeProduct({
                      id: item.id,
                      image: item.image,
                      name: item.name,
                      unit_amount: item.unit_amount,
                      quantity: item.quantity,
                    })
                  }
                >
                  <IoRemoveCircle />
                </button>
                <button
                  onClick={() =>
                    cartStore.addProduct({
                      id: item.id,
                      image: item.image,
                      name: item.name,
                      unit_amount: item.unit_amount,
                      quantity: item.quantity,
                    })
                  }
                >
                  <IoAddCircle />
                </button>
              </div>
              <p className="text-sm">{formatPrice(item.unit_amount)}</p>
            </div>
          </div>
        ))}
        {cartStore.cart.length > 0 ? (
          <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">
            Checkout
          </button>
        ) : (
          <div className="flex flex-col items-center gap-12 text-2xl font-medium pt-56 opacity-75">
            <h1>Cart Is Empty...</h1>
            <Image
              src="/images/Cart.png"
              alt="Empty Cart Image"
              width={155}
              height={155}
            />
          </div>
        )}
      </div>
    </div>
  );
}
