import { createContext, useState } from "react";
import data from '../data.json';

export const CartContext = createContext([]);

const ShoppingCartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);
    const [ cartQty, setCartQty ] = useState(0);
    const [ totalAmount, setTotalAmount ] = useState(0);

    const cleanCart = () => setCart([]);
    
    const findProduct = (id) => data.find(product => product.id === id);
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    function addAmount (price, quantity) {
        let amount = totalAmount;
        amount += (price * quantity);
        setTotalAmount(amount)
    }

    const addItem = (quantity, id) => {
        let total = cartQty;
        let newCart;
        let item = findProduct(id);
        let product = cart.find(product => product.id === item.id);
        if(product) {
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            newCart = [...cart, {...item, quantity: quantity}];
        }
        total += quantity;
        setCart(newCart);
        setCartQty(total);
        addAmount(item.price, quantity);
    };

    return (
        <CartContext.Provider value={{ 
            cleanCart, 
            findProduct, 
            removeProduct, 
            addItem,
            cart, 
            setCart,
            cartQty,
            totalAmount,
            addAmount}}>
        { children }
        </CartContext.Provider>
    );
};

export default ShoppingCartProvider;