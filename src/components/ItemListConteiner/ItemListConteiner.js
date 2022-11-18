import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { useState , useEffect } from 'react'
// import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/Itemlist'
import { useParams } from 'react-router-dom'
import {getDocs , collection, getDoc, query,where} from  "firebase/firestore"
import { db } from '../../services/firebase'
import { NotificationContext } from '../../notification/notification'
import "./ItemListConteiner.css"

const ItemListConteiner = () => {
    const [products,setProducts]= useState([])
    const [loading, setLoading]=useState(true)
    const{setNotification} = useContext(NotificationContext)
    const{categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        
        const collectionRef =  categoryId
            ? query(collection(db,'products'), where('category','==',categoryId))
            :collection (db,'products')
        // const collectionRef = collection (db,'products')

        getDocs(collectionRef).then(response =>{
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(categoryId)
                console.log(doc.id)
                return {id :doc.id, ... data}
            })
            setProducts(productsAdapted)
        })
        .catch(()=>{
            setNotification('error, no se pueden cargar los productos')
        })
        .finally(()=>{
            setLoading(false)
        })

        // getProducts(categoryId).then(products =>{
        //     setProducts(products)
        // })
    },[categoryId])

    // console.log(products)
    
    
    if(loading && true) {
        return <h1>Cargando productos...</h1>
    }
    

    return (
        <div className='ItemListContainer'>
            <h1>{` ${categoryId || 'Todos los productos'}`}</h1>
            <ItemList products={products}/>

        </div>
    )

}

export default ItemListConteiner