

import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { NotificationContext } from "../../notification/notification"
import Cart from "../Cart/Cart"
import CartItem from "../CartItem/CartItem"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const {setNotification} = useContext(NotificationContext)
    


    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name:name,
                    phone:phone,
                    email:email
                },
                items: cart,
                total
            }

            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                setNotification(`success`, `se agrego correctamente su numero de orden es  ${orderAdded.id}`)
                clearCart()
            } else {
                setNotification(``,'hay productos fuera de stock')
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
            setNotification(``,'ERROR NO HAY PRODUCTOS SELECCIONADOS')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }
    

    return (
        <>
            <h1>Checkout</h1>  
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <form>
                <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        phone:
                        <input
                        type="phone"
                        name="phone"
                        value={phone}
                        onChange={ev => setPhone(ev.target.value)}
                        />
                    </label>
                </div>
            </form>
            <button onClick={createOrder}>Agregar documento</button>
            
        </>
    )
}

export default Checkout