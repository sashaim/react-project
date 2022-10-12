import React from 'react'
import ReactDOM from 'react-dom'
import { useState , useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/Itemlist'
import { useParams } from 'react-router-dom'

const ItemListConteiner = () => {
    const [products,setProducts]= useState([])

    const{ categoryId } = useParams()

    useEffect(()=>{
        getProducts(categoryId).then(products =>{
            setProducts(products)
        })
    },[categoryId])

    console.log(products)


    return (
        <div>
            <h1>Todos nuestros productos</h1>
            <ItemList products={products}/>

        </div>
    )

}

export default ItemListConteiner