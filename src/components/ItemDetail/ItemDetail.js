import { useState, useContext} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../notification/notification"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail= ({ id, name ,img , category, description , price , stock  }) => {
    const [quantityToAdd , setQuantityToAdd ]= useState(0)

    const {addItem , getProductQuantity} = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        setNotification(`success`, `se agrego correctamente ${quantity} ${name} `)
    }

    const productAddedQuantity = getProductQuantity(id)

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} intial={productAddedQuantity}/>
                    ) : (
                        <Link to='/cart' className='Option'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
    
}

export default ItemDetail

