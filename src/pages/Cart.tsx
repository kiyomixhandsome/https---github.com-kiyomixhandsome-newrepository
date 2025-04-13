
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, ArrowRight, ShoppingCart as CartIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample cart data (in a real app, this would be managed with context or state management)
const initialCartItems = [
  {
    id: 1,
    name: "Obsidian Crystal Pendant",
    price: 29.99,
    image: "/obsidian-pendant.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Gothic Rose Candle Holder",
    price: 24.99,
    image: "/candle-holder.jpg",
    quantity: 2,
  },
  {
    id: 3,
    name: "Midnight Raven Earrings",
    price: 19.99,
    image: "/raven-earrings.jpg",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount if coupon applied
  const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50
  const total = subtotal - discount + shipping;
  
  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Apply coupon code
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "gothic10") {
      setCouponApplied(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-obsidian flex flex-col">
      <Navbar />
      
      <div className="py-8 bg-gradient-to-b from-obsidian-dark to-obsidian">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Your Shopping Cart</h1>
          <p className="text-silver text-lg">Review and checkout your selections</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="gothic-card p-6">
                <h2 className="text-xl font-playfair font-bold mb-6">Cart Items ({cartItems.length})</h2>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-center border-b border-obsidian-dark pb-6 last:border-0 last:pb-0">
                      {/* Product Image */}
                      <div className="sm:w-24 h-24 bg-gradient-to-br from-amethyst-dark/30 to-obsidian-light flex items-center justify-center rounded mb-4 sm:mb-0">
                        <span className="text-xl text-silver/20 font-gothic">Image</span>
                      </div>
                      
                      {/* Product Details */}
                      <div className="sm:flex-1 sm:ml-4 text-center sm:text-left">
                        <h3 className="font-playfair font-medium text-lg mb-1">{item.name}</h3>
                        <p className="text-silver text-sm mb-2">Unit Price: ${item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center justify-center sm:justify-start space-x-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-obsidian-dark rounded-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 hover:bg-obsidian-light"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-x border-obsidian-dark">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-obsidian-light"
                            >
                              +
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-silver hover:text-blood flex items-center transition-colors"
                          >
                            <Trash2 size={16} className="mr-1" />
                            <span className="text-sm">Remove</span>
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="mt-4 sm:mt-0 sm:ml-4 text-right">
                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                  <Link to="/products" className="gothic-link flex items-center mb-4 sm:mb-0">
                    <ArrowRight size={16} className="mr-2 transform rotate-180" />
                    Continue Shopping
                  </Link>
                  
                  <Button 
                    onClick={() => setCartItems([])}
                    variant="outline" 
                    className="obsidian-btn"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="gothic-card p-6 sticky top-20">
                <h2 className="text-xl font-playfair font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-silver">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {couponApplied && (
                    <div className="flex justify-between text-blood">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-silver">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="border-t border-obsidian-dark my-3 pt-3 flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="mt-6">
                  <label htmlFor="coupon" className="block text-sm mb-2">Discount Code</label>
                  <div className="flex">
                    <Input 
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      className="bg-obsidian-light border-obsidian-dark focus:border-blood"
                    />
                    <Button 
                      onClick={applyCoupon}
                      variant="outline" 
                      className="ml-2 obsidian-btn"
                      disabled={couponApplied}
                    >
                      Apply
                    </Button>
                  </div>
                  {couponApplied && (
                    <p className="text-blood text-xs mt-1">Coupon "GOTHIC10" applied successfully!</p>
                  )}
                </div>
                
                {/* Checkout Button */}
                <Button className="blood-btn w-full mt-6">
                  Proceed to Checkout
                </Button>
                
                {/* Secure checkout message */}
                <div className="mt-4 flex items-center justify-center text-xs text-silver">
                  <AlertCircle size={14} className="mr-1" />
                  <span>Secure checkout with encrypted payment</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart
          <div className="gothic-card p-8 text-center">
            <div className="flex justify-center mb-4">
              <CartIcon size={64} className="text-silver/50" />
            </div>
            <h2 className="text-2xl font-playfair font-bold mb-2">Your Cart is Empty</h2>
            <p className="text-silver mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/products">
              <Button className="blood-btn">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
