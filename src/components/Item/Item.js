import React from "react"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({prod})=>{
    return(
        <article className="CardItem container row ">
            <header className="Header">
                <h2 className="ItemHeader">{prod.name}</h2>
            </header>
            <picture>
                <img src={prod.img} alt={prod.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio : ${prod.price}
                </p>
            </section>
            <footer>

                <Link to={`/detail/${prod.id}`} className="Option btn btn-dark">Mostrar Detalle</Link>
            </footer>

        </article>
    )
}

export default Item