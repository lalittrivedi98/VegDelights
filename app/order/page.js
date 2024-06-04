'use client'; // Add this directive at the top

import { useRouter } from 'next/navigation'; // Update this import
import { useState } from 'react';
import Cart from '../../components/Cart';

const Order = () => {
  const router = useRouter(); // No change needed here
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Dish 1', price: 10 },
    { id: 2, name: 'Dish 2', price: 15 },
    // Add more menu items here
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const checkout = () => {
    console.log('Checking out with items:', cart);
    setCart([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Order Food</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">Add to Cart</button>
          </li>
        ))}
      </ul>
      <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
    </div>
  );
};

export default Order;
