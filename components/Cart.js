const Cart = ({ cart, removeFromCart, checkout }) => (
    <div>
      <h2 className="text-3xl font-bold mt-4">Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)} className="ml-2 bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={checkout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
    </div>
  );
  
  export default Cart;
  