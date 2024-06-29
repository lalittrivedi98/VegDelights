const Cart = ({ cart, removeFromCart, checkout }) => (
    <div>
      <h2 className="text-3xl text-black font-bold mt-4">Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="mb-2 text-black">
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)} className="px-6 py-2 ml-3 mt-3 text-center text-white bg-red-500 rounded-md">Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={checkout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
    </div>
  );
  
  export default Cart;
  