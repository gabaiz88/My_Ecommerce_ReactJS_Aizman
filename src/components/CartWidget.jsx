import cart from "../assets/shopping-cart.png";


const CartWidget = () => {
  return (
    <>
      <img id="cart" src={cart} alt="" />
      <p className="cantidad_items">1</p>
    </>
  )
}

export default CartWidget