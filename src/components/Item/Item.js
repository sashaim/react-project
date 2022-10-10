import React from "react"
import { Link } from "react-router-dom"

const Item = ({prod})=>{
    return(
        <div>
            <h1>{prod.name}</h1>
            <h2>{prod.category}</h2>
            <Link to={`/detail/${prod.id}`}>Mostrar Detalle</Link>
        </div>
    )
}

export default Item