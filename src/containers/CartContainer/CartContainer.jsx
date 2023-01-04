import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const [ dataForm, setDataForm ] = useState({ name:"", email:"", telefono:""})
    const { cartList, vaciarCarrito, precioTotal, eliminarItem, cantidadTotal } = useCartContext()

    const generarOrden = (evt) => {
        evt.preventDefault()

        const order = {}

        // const validaciones = if {} else {}

        order.buyer = dataForm

        order.item = cartList.map( ({ name, id, precio }) => ({ name, id, precio }) )

        order.total = precioTotal()

        const db = getFirestore()

        const queryOrder = collection(db, 'orders')

        addDoc(queryOrder, order)
            .then( resp => console.log(resp) )
            .catch(err => console.log(err))
            .finally(() => {
            vaciarCarrito()
            setDataForm({
                name:"",
                email:"",
                telefono:""
            })
        })
    }

    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
        { cantidadTotal() === 0 &&
        <div>
            <h2>Tu Carrito esta vacío</h2>
            <Link to='/'>
            <button className="btn btn-outline-success">Ver Productos</button>
            </Link>
        </div>
        }
        { cantidadTotal() !== 0 && 
            <div>
                { cartList.map(product =>
            
                    <div key={product.id}>
                        <img src={product.imagen} alt={product.name} className="w-25" />
                        {product.name} - Cantidad: {product.cantidad} - Precio: ${product.precio}
                        <button className="btn btn-danger" onClick={ () => eliminarItem(product.id) }>X</button>
                    </div>
    
                )}
                <button className="btn btn-danger" onClick={vaciarCarrito} >Vaciar Carrito</button>
                { precioTotal() > 0 && <label>Precio Total: { precioTotal() }</label> }
                
                <form onSubmit={generarOrden}>
                    <div className="form-group w-50">
                        
                        <label htmlFor="name">
                            Nombre Completo
                        </label>
                        <input type="text" className="form-control" name="name" value={dataForm.name} placeholder="Ingrese el Nombre" onChange={handleOnChange}/>
                        
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="text" className="form-control" name="email" value={dataForm.email} placeholder="Ingrese el email" onChange={handleOnChange}/>
                        
                        <label htmlFor="telefono">
                            Confirmar email
                        </label>
                        <input type="text" className="form-control" name="confirmarEmail" placeholder="Confirmar email" onChange={handleOnChange}/>
                        
                        <label htmlFor="telefono">
                            Teléfono
                        </label>
                        <input type="number" className="form-control" name="telefono" value={dataForm.telefono} 
                        placeholder="Ingrese el teléfono" onChange={handleOnChange}/>

                        <button className="btn btn-dark" onClick={generarOrden}>Generar Orden</button>

                    </div>
                </form>
            </div>
            }
        </>
    )
}

export default CartContainer