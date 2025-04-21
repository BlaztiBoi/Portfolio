import React, { useState } from "react";
import { ArrowBigDownDashIcon, ShoppingCart as CartIcon } from "lucide-react";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { useCart } from "./hooks/useCart";
import { products } from "./data/products";
import { Category } from "./types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function MiniShop() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("");

  const categories: Category[] = ["electronics", "clothing", "weapons"];

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const filteredProducts = products
    .filter((p) => selectedFilter === "All" || p.category === selectedFilter)
    .sort((a, b) => {
      switch (selectedSort) {
        case "price-low-high":
          return a.price - b.price;
        case "price-high-low":
          return b.price - a.price;
        case "name-a-z":
          return a.name.localeCompare(b.name);
        case "name-z-a":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-modern_black to-another_black text-white">
      <header className="bg-transparent backdrop-blur-lg shadow-lg shadow-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mini Shop</h1>
            <a
              onClick={() => setShowCart(!showCart)}
              href="#cart"
              className="relative p-2 hover:bg-another_black rounded-lg hover:outline-none hover:ring-2 hover:ring-neutral-500 hover:border-neutral-700  transition"
            >
              <CartIcon size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-modern_black border-neutral-700 border text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <div className="md:flex grid grid-cols-2 md:gap-4 gap-2 mb-2">
              <Menu as="div" className="relative inline-block md:max-w-60 md:min-w-60 text-left">
                <div>
                  <Menu.Button className="flex text-sm justify-between items-center w-full px-4 py-2 rounded-lg border border-stone-700 bg-another_black text-gray-300 hover:ring-2 hover:ring-neutral-500 hover:border-neutral-700 transition">
                    {selectedFilter === "All"
                      ? "Filter by category"
                      : `${selectedFilter
                          .charAt(0)
                          .toUpperCase()}${selectedFilter.slice(1)}`}
                    <ArrowBigDownDashIcon className="w-5 h-5 ml-2 mt-1 text-gray-400" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-20 w-full mt-2 origin-top-right bg-transparent backdrop-blur-md divide-y divide-neutral-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {["All", ...categories].map((cat) => {
                      const formattedName =
                        cat.charAt(0).toUpperCase() +
                        cat.slice(1).toLowerCase();
                      return (
                        <Menu.Item key={cat}>
                          {({ active }) => (
                            <button
                              onClick={() => setSelectedFilter(cat)}
                              className={`${
                                active
                                  ? "bg-another_black bg-opacity-80  transition"
                                  : "text-gray-300"
                              } group flex w-full items-center px-4 py-2 text-sm capitalize`}
                            >
                              {formattedName}
                            </button>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </Menu.Items>
                </Transition>
              </Menu>

              <Menu as="div" className="relative inline-block md:max-w-60 md:min-w-60 text-left">
                <div>
                  <Menu.Button className="flex text-sm justify-between items-center w-full px-4 py-2 rounded-lg border border-stone-700 bg-another_black text-gray-300 hover:ring-2 hover:ring-neutral-500 hover:border-neutral-700 transition">
                    {selectedSort || "Sort by"}
                    <ArrowBigDownDashIcon className="w-5 h-5 ml-2 -mr-1 mt-1 text-gray-400" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-20 w-full mt-2 origin-top-right bg-transparent backdrop-blur-md divide-y divide-neutral-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {[
                      { label: "Price: Low to High", value: "price-low-high" },
                      { label: "Price: High to Low", value: "price-high-low" },
                      { label: "Name: A-Z", value: "name-a-z" },
                      { label: "Name: Z-A", value: "name-z-a" },
                    ].map((option) => (
                      <Menu.Item key={option.value}>
                        {({ active }) => (
                          <button
                            onClick={() => setSelectedSort(option.value)}
                            className={`${
                              active
                                ? "bg-another_black bg-opacity-80  transition"
                                : "text-gray-300"
                            } group flex w-full items-center px-4 py-2 text-sm`}
                          >
                            {option.label}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:flex flex-wrap gap-2 lg:gap-4">
              {" "}
              {/**{grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6} */}
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>

          <div
            id="cart"
            className={`w-full md:w-1/3 ${
              showCart ? "block" : "hidden md:block"
            }`}
          >
            <Cart
            
              items={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              total={total}
            />
          </div>
        </div>
      </main>
      <div className="pt-4 bg-transparent backdrop-blur-lg shadow-lg shadow-neutral-400 max-w-full min-w-2xl py-1 flex-col flex justify-center items-center mx-auto font-mono text-center">
      <span className=" block w-full p-0 rounded-md">Made by Blazt ( Aung Htet Oo )</span>
      <a target="blank_" href="https://toatotallyLegitPortfolioSitebyAungHtetoo.com" className=" border-b border-neutral-300 hover:border-b hover:border-neutral-700 transition duration-200">Check out my portfolio {`>>>`}</a>
    </div>
    </div>
  );
}

export default MiniShop;
