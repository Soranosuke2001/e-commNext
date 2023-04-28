"use client";

import Image from "next/image";

import formatPrice from "@/util/priceFormat";
import { useCartStore } from "@/util/store";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Checkout from "./Checkout";

export default function Cart() {
  const cartStore = useCartStore();

  // Gets the total price of all items in cart
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
      onClick={() => cartStore.toggleCart()}
    >
      <motion.div
        layout
        className="bg-white absolute right-0 top-0 w-full h-screen p-12 overflow-y-scroll text-gray-700 lg:w-2/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-sm font-bold pb-12"
          onClick={() => cartStore.toggleCart()}
        >
          Back to Store 🔙
        </button>
        {cartStore.onCheckout === "cart" && (
          <>
            {cartStore.cart.map((item) => (
              <motion.div layout key={item.id} className="flex py-4 gap-4">
                <Image
                  className="rounded-md h-24"
                  src={item.image}
                  alt={`image of ${item.name}`}
                  width={120}
                  height={120}
                />
                <motion.div layout>
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
                </motion.div>
              </motion.div>
            ))}
            {cartStore.cart.length > 0 ? (
              <>
                <p>Total: {formatPrice(totalPrice)}</p>
                <button
                  onClick={() => cartStore.setCheckout("checkout")}
                  className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white"
                >
                  Checkout
                </button>
              </>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
                  animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
                  exit={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
                  className="flex flex-col items-center gap-12 text-2xl font-medium pt-56 opacity-75"
                >
                  <h1>Cart Is Empty...</h1>
                  <Image
                    src="/images/Cart.png"
                    alt="Empty Cart Image"
                    width={155}
                    height={155}
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </>
        )}
        {cartStore.onCheckout === "checkout" && <Checkout />}
      </motion.div>
    </motion.div>
  );
}
