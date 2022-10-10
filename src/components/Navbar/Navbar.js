import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return (
        <nav className=' navbar  navbar-expand-lg navbar-light bg-light'>
            <div className='row w-100'>

                <div className='col-4'>
                    <h1 className='title'>Xbrand</h1> 
                </div>
                <div className="col-4 btn-group links" >
                    <Link to={`/category/buzos`} className="btn btn-primary">Buzos</Link>
                    <Link to={`/category/buzos`}className="btn btn-primary">Remeras</Link>
                    <Link to={`/category/buzos`}className="btn btn-primary">Camperas</Link>

                </div>
                <div className='col-4'>
                    <CartWidget/>
                </div>

            </div>
                
        </nav>
    )
}
export default Navbar