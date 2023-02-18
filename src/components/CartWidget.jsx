import cart from "../assets/shopping-cart.png";


const CartWidget = ({cantidad}) => {
  return (
    <>
      <img id="cart" src={cart} alt="" />
      <p className="cantidad_items">{cantidad}</p>
    </>
  )
}

export default CartWidget