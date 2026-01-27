import React from "react";
import "./Card.css";
import { useContext } from "react";
import { shopContext } from "../../Context/Context";
import { assets } from "../../assets/assets";

const Card = () => {
  const {
    products,
    cardItem,
    addtocard,
    removefromcard,
    setCardItem,
    Der,
    Delete,
    Del,
  } = useContext(shopContext);

  return (
    <div className="card px-4 sm:px-10 lg:px-20 border-t border-gray-200 pt-10">
      <h1 className="text-2xl font-medium text-black mb-5">
        <span className="text-gray-400">YOUR</span> CART
      </h1>
      <div className="product mt-10">
        {products.map((e) => {
          if (cardItem[e._id] > 0) {
            let product = e;
            let item = cardItem[e._id];
            return (
              <div
                className="py-4 border-t border-b border-gray-200 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                key={product._id}
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20 rounded-lg cursor-pointer"
                    src={product.image[0]}
                    alt={product.name}
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>${product.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                  <button
                    className="cursor-pointer py-1 px-3 border border-gray-300 rounded hover:bg-black hover:text-white transition-all text-xl"
                    onClick={() => removefromcard(product._id)}
                  >
                    -
                  </button>
                  <span className="font-bold">{item}</span>
                  <button
                    className="cursor-pointer py-1 px-3 border border-gray-300 rounded hover:bg-black hover:text-white transition-all text-xl"
                    onClick={() => addtocard(product._id)}
                  >
                    +
                  </button>
                </div>

                <div className="flex justify-end">
                  <img
                    onClick={() => Delete(product._id)}
                    className="w-4 sm:w-5 cursor-pointer hover:scale-110 transition-all font-bold text-red-500"
                    src={assets.bin_icon || assets.cross_icon}
                    alt="delete"
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <div className="w-full">
            <h1 className="text-2xl font-medium mb-3 uppercase">Cart Totals</h1>
            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${Object.keys(cardItem).reduce((acc, id) => {
                  const p = products.find(prod => prod._id === id);
                  return acc + (p ? p.price * cardItem[id] : 0);
                }, 0).toFixed(2)}</p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>$10.00</p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between font-bold text-black border-t-2 border-black pt-2">
                <p>Total</p>
                <p>${(Object.keys(cardItem).reduce((acc, id) => {
                  const p = products.find(prod => prod._id === id);
                  return acc + (p ? p.price * cardItem[id] : 0);
                }, 0) + 10).toFixed(2)}</p>
              </div>
            </div>
            <div className="w-full text-end">
              <button className="bg-black text-white text-sm my-8 px-8 py-3 uppercase active:bg-gray-700 transition-all shadow-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
