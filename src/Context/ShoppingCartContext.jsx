import { createContext, useState } from "react";
import data from '../data.json';

export const CartContext = createContext([]);

const ShoppingCartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    const cleanCart = () => setCart([]);
    
    const findProduct = (id) => data.find(product => product.id === id);
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
    
    const addItem = (quantity, id) => {
        let newCart;
        let item = findProduct(id);
        let product = cart.find(product => product.id === item.id);
        if(product) {
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            newCart = [...cart, {...item, quantity: quantity}];
        }
        setCart(newCart);
    }
    console.log(cart);

    return (
        <CartContext.Provider value={{ 
            cleanCart, 
            findProduct, 
            removeProduct, 
            addItem,
            cart, 
            setCart}}>
        { children }
        </CartContext.Provider>
    );
};

export default ShoppingCartProvider;