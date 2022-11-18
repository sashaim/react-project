import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return (
        <nav className=' navbar  navbar-expand-lg navbar-light bg-light'>
            <div className='row w-100'>

                <div className='col-4 '>
                    <Link to="/" className='title' ><h1 className='title'>Xbrand</h1></Link> 
                </div>
                <div className="col-4 btn-group links" >
                    <Link to={`/category/hoodies`} className="btn  sub-title  btn-primary">Buzos</Link>
                    <Link to={`/category/shirts`}className="btn sub-title  btn-primary">Remeras</Link>
                    <Link to={`/category/caps`}className="btn sub-title btn-primary">Gorras</Link>

                </div>
                <div className='col-4'>
                    <CartWidget/>
                </div>

            </div>
                
        </nav>
    )
}
export default Navbar