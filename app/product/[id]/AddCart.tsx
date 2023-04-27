"use client";

import { AddCartType } from "@/types/AddCartType";
import { useCartStore } from "@/util/store";

export default function AddCart({ name, id, image, unit_amount, quantity }: AddCartType) {
    const cartStore = useCartStore();
  return (
    <>
      <button onClick={() => cartStore.addProduct({ name, image, unit_amount, quantity, id })} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700">
        Add To Cart
      </button>
    </>
  );
}
