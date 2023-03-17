import { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";


export const CartContext = createContext([]);

const ShoppingCartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);
    const [ cartQty, setCartQty ] = useState(0);
    const [ totalAmount, setTotalAmount ] = useState(0);
    const [ products, setProducts ] = useState([])
    // const { id } = useParams();

    useEffect(() => {
      const db = getFirestore();
  
      const itemsCollection = collection (db, "videojuegos");
      getDocs(itemsCollection).then((snapshot) =>{
        const docs = snapshot.docs.map((doc)=> ({
          ...doc.data(), 
          id: doc.id
        }));
        setProducts(docs);
      })
    },[])

    const cleanCart = () => setCart([]);
    
    const findProduct = (id) => products.find(product => product.id === id);
    
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
        console.log(id);
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
        console.log(cart);
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