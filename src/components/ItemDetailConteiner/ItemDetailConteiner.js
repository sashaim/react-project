import React from 'react'
import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetailConteiner = () => {

    const [product,setProducts] = useState({}) 
    const [loading,setLoading] = useState(true)
    const {productId} = useParams()
    useEffect(()=>{
        getProduct(productId).then(product =>{
            setProducts(product)
        }).finally(()=>{
            setLoading(false)
        })
    },[])

    console.log(product)

    if (loading){
        return (
            <h1>Loading....</h1>
        )
    }
    
    return (

        <div className='conteiner'>
            <h1>Detalle del producto</h1>
            <div className='col'>
                {/* <ItemCount {...product} addItem={addItem}/> */}
                <h1>{product.name}</h1>
                <picture>
                    <img src={product.img} alt={product.name} className="ItemImg"/>
                </picture>
                <h2>{product.price}</h2>
                <h3>{product.category}</h3>
                <ItemCount/>
                {/* counter */}
            </div>
        </div>
    )
}

export default ItemDetailConteiner