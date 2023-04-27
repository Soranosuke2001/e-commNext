import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  name: string;
  id: string;
  images?: string[];
  description?: string;
  unit_amount: number;
  quantity: number;
};

type CartState = {
  isOpen: boolean;
  cart: CartItem[];
  toggleCart: () => void;
  addProduct: (item: CartItem) => void;
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
    }),
    { name: "cart-store" }
  )
);
