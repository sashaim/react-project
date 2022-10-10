import React from 'react'
import ReactDOM from 'react-dom'
import { useState , useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/Itemlist'

const ItemListConteiner = () => {
    const [products,setProducts]= useState([])

    useEffect(()=>{
        getProducts().then(products =>{
            setProducts(products)
        })
    },[])

    console.log(products)


    return (
        <div>
            <h1>Todos nuestros productos</h1>
            <ItemList products={products}/>

        </div>
    )

}

export default ItemListConteiner