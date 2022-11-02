import React from "react";
import logo from "../../Image/carrito2.svg"
import "./CartWidget.css"
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget =() => {

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        // <div className="logo conteiner">
        //     <img src={logo} />
        //     10
        // </div>
        <Link to='/cart' className="CartWidget">
            <img src={logo} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </Link>

    )
}

export default CartWidget