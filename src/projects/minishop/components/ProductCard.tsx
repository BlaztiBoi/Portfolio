import React from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <div className="bg-another_black border border-stone-700 p-4 rounded-xl text-white flex flex-col gap-4 overflow-hidden max-w-60 md:min-w-60 ">
    <div className="flex items-center gap-4 relative">
      <div className="md:min-w-[100px] md:h-[100px] h-[80px] flex justify-center items-center overflow-visible">
        <img src={product.image} alt={product.name} className="z-0 md:absolute md:right-10 object-contain h-full md:w-[440px]" />
      </div>
      <div className="flex flex-col justify-center z-10  ">
        <p className="text-base font-semibold leading-tight whitespace-pre-line">{product.name}</p>
        <p className="text-stone-400 text-sm mt-1">${product.price}</p>
      </div>
    </div>
    <button 
    onClick={() => onAddToCart(product)}
    className="bg-another_black w-full py-2 rounded-lg border border-stone-700 hover:outline-none hover:ring-2 hover:ring-neutral-500 hover:border-neutral-700  transition">
      Add to cart
    </button>
                    {/* <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-400">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div> */}
    </div>

  );
};
