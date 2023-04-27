import { AddCartType } from "@/types/AddCartType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  isOpen: boolean;
  cart: AddCartType[];
  toggleCart: () => void;
  addProduct: (item: AddCartType) => void;
  removeProduct: (item: AddCartType) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addProduct: (item) =>
        set((state) => {
          // Check if item is already in cart
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );

          // If item is already in cart, update quantity by 1
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                };
              }
              return cartItem;
            });

            // Once the item is updated, return the updated cart
            return { cart: updatedCart };
          } else {
            // If item is not in cart, add item to cart
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeProduct: (item) =>
        set((state) => {
          // Check if item is already in cart
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );

          // If the quantity for the item is 1, remove the item from cart
          if (existingItem?.quantity === 1) {
            const updatedCart = state.cart.filter(
              (cartItem) => cartItem.id !== item.id
            );
            return { cart: updatedCart };
          } else {
            // If the quantity for the item is more than 1, subtract the quantity by 1
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          }
        }),
    }),
    { name: "cart-store" }
  )
);
