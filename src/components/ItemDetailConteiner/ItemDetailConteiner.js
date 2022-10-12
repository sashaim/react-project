import React from 'react'
import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'


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

        <div>
            <h1>Detalle del producto</h1>
            <div>
                <h1>{product.name}</h1>
                <h2>{product.category}</h2>
                <h3>{product.price}</h3>
                {/* counter */}
            </div>
        </div>
    )
}

export default ItemDetailConteiner