import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise: any = loadStripe('pk_test_51NjD9BSAwjgzRHfsve8nj5JK5m10kUTkNUElkVCZeF5t24Umby4GwgIO7VGdStTUq7FfNq6Ig57QdnyhXtfykhcN00ivsMtFwY');

const Cart = () => {
    const { cartItems, removeCartItems } = useCart();
    const [totalPrice, setTotalPrice] = useState<number | string>();
    const [email, setEmail] = useState('');

    const handleCheckout = async () => {
        try {
            if (!email) {
                alert("Please enter your email.");
                return;
            }
            const response = await fetch('http://localhost:8000/api/v1/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems.map((item: any) => ({
                        name: item.title,
                        description: item.description || "Sample",
                        price: item.price,
                        quantity: item.quantity || 1,
                    })),
                    domain: window.location.origin,
                    email: email,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const session = await response.json();
            console.log("Session created:", session);
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId: session.sessionId });

            if (error) {
                console.error('Error redirecting to checkout:', error);
                alert('An error occurred: ' + error.message);
            }
        } catch (error) {
            console.error("Error in checkout process:", error);
            alert('Something went wrong during the checkout process.');
        }
    };

    const removeCartItemHandler = (e: any, item: any) => {
        removeCartItems(e, item)
        alert("Item removed successfully")
    }

    useEffect(() => {
        setTotalPrice(cartItems.reduce((total: any, item: any) => item.price + total, 0));
    }, [cartItems]);

    console.log("Total Price==>> ", totalPrice)

    return (
        <div className="w-full h-max flex justify-center items-center bg-gray-50">
            <div className="flex gap-10 w-full max-w-screen-lg md:flex-row flex-col">
                <div className="md:w-2/3 w-full bg-white shadow-lg rounded-lg p-6">
                    {cartItems.length > 0 ? (
                        <div className="flex flex-col gap-5">
                            {cartItems.map((item: any, idx: number) => (
                                <div key={idx} className="flex items-center justify-between border-b py-4">
                                    <div className="flex items-center gap-4">
                                        <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                                        <div>
                                            <h2 className="text-xl font-semibold">{item.title}</h2>
                                            <p className="text-sm text-gray-500">{item.description || "Sample Description"}</p>
                                            <p className="text-lg font-bold text-gray-700">$: {item.price}</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-200"
                                        onClick={(e) => removeCartItemHandler(e, item)}

                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <span className="text-lg text-gray-500">No items in the cart</span>
                        </div>
                    )}
                </div>

                <div className="md:w-1/3 w-full bg-white shadow-lg rounded-lg p-6">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-semibold">Order Summary</h1>
                        <p className="text-lg text-gray-500 mt-2">Review your cart before proceeding</p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg">Total Price:</p>
                        <p className="text-xl font-bold text-gray-700">$ {totalPrice}</p>
                    </div>

                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
