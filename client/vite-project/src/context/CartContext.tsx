import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any | null>(null);

export const CartProvider = ({ children }: any) => {
    const [cartItems, setCartItems] = useState<any>([]);
    const addToCart = (e: any, item: any) => {
        setCartItems((prev: any) => {
            const updatedCartItems = [...prev, item];
            localStorage.setItem('cartItem', JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    };

    const removeCartItems = (e: any, item: any) => {
        setCartItems((prev: any) => {
            const updatedCartItems = prev.filter((cartItem: any) => cartItem.id !== item.id);
            localStorage.setItem("cartItem", JSON.stringify(updatedCartItems))
            return updatedCartItems;
        });
    };

    useEffect(() => {
        const productItems = JSON.parse(localStorage.getItem('cartItem') as string);
        if (productItems) {
            setCartItems(productItems);
        }
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}