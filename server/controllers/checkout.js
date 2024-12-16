const Order = require("../models/CheckoutModel");

const stripe = require("stripe")("sk_test_51NjD9BSAwjgzRHfsGC3hgmQAPBRIhNskq9HIGq9erMQxakx1NtixbKQzcEMRXAj9sfDp0omzZxXc75Pzb9nJbLkn00iOQFfRcY");


exports.checkoutHandler = async (req, res) => {
    try {
        const { items, domain, email } = req.body;
        const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity || 1), 0);
        const session = await stripe.checkout.sessions.create({
            line_items: items.map(item => ({
                price_data: {
                    currency: "usd",
                    unit_amount: item.price * 100,
                    product_data: {
                        name: item.title || "Sample",
                        description: item.description || 'Product description',
                    },
                },
                quantity: item.quantity || 1,
            })),
            mode: 'payment',
            success_url: `${domain}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domain}/cancel`,
        });
        const order = new Order({
            sessionId: session.id,
            email: email,
            items: items,
        });
        await order.save();
        res.json({ sessionId: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({
            error: error.message || 'An error occurred while creating the checkout session.',
        });
    }
};


