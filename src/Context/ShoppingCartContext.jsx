import { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const CartContext = createContext([]);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState([]);
  const db = getFirestore();

  //llamado a los productos de las BD
  useEffect(() => {
    const itemsCollection = collection(db, "videojuegos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);
    });
  }, []);

  //Funcion que borra el carrito y la cantidad en él
  const cleanCart = () => {
    setCartQty(0);
    setCart([]);
    setTotalAmount(0);
  };

  //Funcion que encuentra un producto segun el ID
  const findProduct = (id, array) => array.find((product) => product.id === id);

  //Funcion para restar precio al total
  function substractAmount(price) {
    let amount = totalAmount;
    amount -= price;
    setTotalAmount(amount);
  }

  //Funcion para restar cantidad de producto
  function substractQty() {
    if (cartQty > 0) {
      setCartQty(cartQty - 1);
    }
  }

  //Funcion para ver si el cart esta vacio
  function cartIsEmpty() {
    let empty = false;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].quantity === 0 && cart.length <= 1) {
        empty = true;
      }
    }
    return empty;
  }

  //Funcion para remover producto del cart
  const removeProduct = (id) => {
    let itemInCart = findProduct(id, cart);
    let quantity = itemInCart.quantity--;
    let posInCart = cart.indexOf(itemInCart);
    let newCart = cart.filter((product) => product.id !== id);
    substractQty();
    if (cart[posInCart].quantity === 0) {
      setCart(newCart);
    } else {
      setCart([...newCart, { ...itemInCart, quantity: quantity - 1 }]);
    }
    if (cart.length > 0 && totalAmount > 0) {
      substractAmount(itemInCart.price);
    }
    let cartEmpty = cartIsEmpty();
    if (cartEmpty) {
      cleanCart();
    }
  };

  //Funcion para sumar un precio al total
  function addAmount(price, quantity) {
    let amount = totalAmount;
    amount += price * quantity;
    setTotalAmount(amount);
  }

  //Funcion para añadir producto al cart
  const addItem = (quantity, id) => {
    let total = cartQty;
    let newCart;
    let item = findProduct(id, products);
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      newCart = [...cart, { ...item, quantity: quantity }];
    }
    total += quantity;
    setCart(newCart);
    setCartQty(total);
    addAmount(item.price, quantity);
  };

  return (
    <CartContext.Provider
      value={{
        cleanCart,
        findProduct,
        removeProduct,
        addItem,
        cart,
        setCart,
        cartQty,
        totalAmount,
        addAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
