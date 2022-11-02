import React from "react"
import { Link } from "react-router-dom"
import Item from "../Item/Item"

import "./ItemList.css"

const ItemList = (({products})=>{
    return(
        <div className="col">
            <div className="prod">
                {products.map(prod => (
                    <Item key={prod.id} prod={prod}/>
                ))
                }
            </div>
        </div>    
    )
})

export default ItemList