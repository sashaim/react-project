
import { useState } from "react"


// en el stock deberia poner una props con el valor del detalle de cada item
// este deberia estar dentro del itemdetailconteiner
const ItemCount = ({stock = 0,intial = 1,onAdd})=>{

    const[quantity,setQuantity]=useState(intial)

    const incrementar = () =>{
        if (quantity < stock) {
            setQuantity  (quantity +1)
        }
    }

    const decrementar = () =>{
        if (quantity > 1){
            setQuantity (quantity -1)
        }
    }

    return (
        <div className="Counter conteiner-fluid">
            <div className="Controls row   ">
                <div className="col">
                    <button className="Button btn btn-dark" onClick={decrementar}>-</button>
                </div>
                <div className="col">
                    <h3 className="Number">{quantity}</h3>
                </div>
                <div className="col-sm">
                    <button className="Button btn btn-dark" onClick={incrementar}>+</button>
                </div>
            </div>
            <div>
                <button className="button btn btn-dark" onClick={()=> onAdd(quantity)}>Agregar al carrito </button>

            </div>
        </div>

    )


}


export default ItemCount