import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Quantity: {quantity}
                </p>
                <p className="InfoCartItem">
                    Price per unit: ${price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                <p className="InfoCartItem">
                     Subtotal: ${price * quantity}
                </p>
                <button className='btn btn-danger' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem