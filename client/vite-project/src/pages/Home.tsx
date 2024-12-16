import { useState } from 'react';
import { productData } from '../lib/dummyData';
import { useCart } from '../context/CartContext';

const Home = () => {
    const [products, setProducts] = useState<any[]>(productData);

    console.log("Set Products", setProducts)

    return (
        <div className="h-screen w-full bg-gray-100 py-10">
            <div className="flex items-center justify-center flex-wrap gap-8">
                {
                    products.map((product, idx) => (
                        <ProductCard key={idx} item={product} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;

const ProductCard = ({ item }: any) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e: any, item: any) => {
        addToCart(e, item);
        alert("Item Added To Cart")
    }

    return (
        <div className="w-72 h-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-lg text-gray-600 mb-4">$: {item.price}</p>
                <button
                    className="w-full bg-black text-white text-lg py-2 rounded-lg hover:bg-gray-800 transition duration-200"
                    onClick={(e) => handleAddToCart(e, item)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}
