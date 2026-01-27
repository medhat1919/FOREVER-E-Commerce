import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets.js"

export const shopContext = createContext(null)


const ShopProvider = (props) => {
  const cardDefault = () => {
    let card = {};
    for (let i = 0; i < products.length; i++) {
      card[products[i]._id] = 0;
    }
    return card

  }

  const [Count, setCount] = useState(0);
  const [Ser, setSer] = useState(false);

  // Initialize cardItem from localStorage or default
  const [cardItem, setCardItem] = useState(() => {
    const savedCard = localStorage.getItem('cartItems');
    return savedCard ? JSON.parse(savedCard) : cardDefault();
  });

  // Update localStorage when cardItem changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cardItem));

    // Derived count update
    let totalCount = 0;
    for (const item in cardItem) {
      if (cardItem[item] > 0) {
        totalCount += cardItem[item];
      }
    }
    setCount(totalCount);
  }, [cardItem]);

  const Def = () => {
    // setCount is now handled by useEffect derived from cardItem
  }

  const Der = () => {
    // setCount is now handled by useEffect derived from cardItem
  }
  const Del = () => {
    setCardItem(cardDefault());
  }

  const addtocard = (_id) => {
    setCardItem((prev) => ({ ...prev, [_id]: prev[_id] + 1 }))
  }

  const removefromcard = (_id) => {
    setCardItem((prev) => ({ ...prev, [_id]: prev[_id] - 1 }))
  }

  const Delete = (_id) => {
    setCardItem((prev) => ({ ...prev, [_id]: 0 }))



  }
  const contextvalue = { products, cardItem, addtocard, removefromcard, setCardItem, Def, Count, setCount, Der, Delete, Del, Ser, setSer }

  return (
    <shopContext.Provider value={contextvalue}>
      {props.children}
    </shopContext.Provider>

  )
}

export default ShopProvider