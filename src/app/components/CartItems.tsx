const CartItems = () => {
  return (
    <div className="p-6 w-auto h-[400px] sm:h-[450px] md:w-[350px] md:h-[600px] max-w-full bg-white shadow-lg z-[1001]" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <p className="text-gray-500">Your cart is empty.</p>
    </div>
  );
};

export default CartItems;
