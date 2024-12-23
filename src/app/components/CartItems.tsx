const CartItems = () => {
  return (
    <div
      className="p-6 w-[250px] h-[500px] sm:w-full max-w-[340px] bg-white shadow-lg z-[1001]"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <p className="text-gray-500">Your cart is empty.</p>
    </div>
  );
};

export default CartItems;
