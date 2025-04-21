import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { CartItem } from "../types";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  total: number;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemove,
  total,
}) => {
  if (items.length === 0) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-gray-400 text-center">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Shopping Cart
      </h2>
      <div className="bg-another_black border border-stone-800 p-4 rounded-lg">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex h-24 items-center gap-4 p-2 mb-1  overflow-hidden border-b border-stone-800"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-20 h-full object-cover object-top "
            />
            <div className="flex-1">
              <h3 className="text-white font-normal">{item.product.name}</h3>
              <p className="text-neutral-400 text-sm">${item.product.price}</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() =>
                    onUpdateQuantity(item.product.id, item.quantity - 1)
                  }
                  className="p-1 bg-another_black rounded-lg border border-stone-700 hover:outline-none hover:ring-2 hover:ring-neutral-500 hover:border-neutral-700  transition"
                >
                  <Minus size={20} className="text-gray-400" />
                </button>
                <span className="text-white w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    onUpdateQuantity(item.product.id, item.quantity + 1)
                  }
                  className="p-1  bg-another_black rounded-lg border border-stone-700 hover:outline-none hover:ring-2 hover:ring-neutral-500 hover:border-neutral-700  transition"
                >
                  <Plus size={20} className="text-gray-400" />
                </button>
              </div>
            </div>

            <button
              onClick={() => onRemove(item.product.id)}
              className="p-1 bg-another_black rounded-lg border border-stone-700 hover:outline-none hover:ring-2 hover:ring-neutral-500 hover:border-neutral-700   transition"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>
        ))}
          <div className="flex justify-between items-center mt-4">
            <span className="text-white text-lg">Total</span>
            <span className="text-lg text-white">
              ${total}
            </span>
          </div>

      </div>
    </div>
  );
};
