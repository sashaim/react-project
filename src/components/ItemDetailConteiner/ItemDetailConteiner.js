import React from 'react'
import { useState, useEffect } from 'react'
// import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'
// import ItemCount from '../ItemCount/ItemCount'
import { getDoc ,doc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailConteiner = ({setCart}) => {

    const [product,setProduct] = useState({}) 
    const [loading,setLoading] = useState(true)
    const {productId} = useParams()
    useEffect(()=>{

        const docRef = doc (db,'products',productId)

        getDoc(docRef).then(doc => {
            const data =doc.data()
            const productAdapted = {id: doc.id, ...data}
            console.log(productId)
            setProduct(productAdapted)
            console.log(productAdapted)

        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })

        // getProduct(productId).then(product =>{
        //     setProducts(product)
        // }).finally(()=>{
        //     setLoading(false)
        // })
    },[productId])

    // console.log(setProduct)

    if (loading){
        return (
            <h1>Loading....</h1>
        )
    }
    
    return (

        <div className='ItemDetailConteiner'>
            <ItemDetail {...product} setCart = {setCart}/>
        </div>
    )
}

export default ItemDetailConteiner