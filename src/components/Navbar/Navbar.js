import React from 'react'
import { useEffect,useState } from 'react'
import { Link ,NavLink} from 'react-router-dom'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../services/firebase'

const Navbar = ()=>{

    const [categories,setCategories]=useState([])
    useEffect (()=>{
        const collectionRef = collection(db,'categories')
        getDocs(collectionRef).then(response =>{
            const categoriesAdapted = response.docs.map(doc=>{
                const data =doc.data()
                return{ id: doc.id, ...data}
            })
            setCategories(categoriesAdapted)
        })

    },[])

    return (
        <nav className=' navbar  navbar-expand-lg navbar-light bg-light'>
            <div className='row w-100'>

                <div className='col-4 '>
                    <Link to="/" className='title' ><h1 className='title'>Xbrand</h1></Link> 
                </div>
                <div className="col-4 btn-group links categories" >
                    {categories.map(cat => (
                        <NavLink key= {cat.id} to={`/category/${cat.slug}`} className="btn  sub-title  btn-primary">{cat.label}</NavLink>
                    ))}

                </div>
                <div className='col-4'>
                    <CartWidget/>
                </div>

            </div>
                
        </nav>
    )
}
export default Navbar