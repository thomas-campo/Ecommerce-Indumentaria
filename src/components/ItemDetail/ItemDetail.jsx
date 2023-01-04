import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
  const [ isCount, setIsCount ] = useState(true)

  const { agregarCarrito, cartList } = useCartContext()

  const onAdd = (cantidad) => {
    agregarCarrito( { ...product, cantidad } )
    setIsCount(false)
  }
  
  console.log(cartList)

  return ( 
    <>
    <div className="row">
      <div className='col'>
        <img className='w-100' src={product.imagen} alt="" />
      </div>
      <div className="col m-5">
        <h2>{product.name}</h2>
        <h5>Categoria: {product.categoria}</h5>
        <h5>Precio: ${product.precio}</h5>
        <h5>Stock: {product.stock}</h5>
        { isCount ? <ItemCount stock={10} intial={1} onAdd={onAdd}/>
         : 
         <>
         <div className="m-5">
         <Link to='/carrito'>
         <button className="btn btn-outline-success">Ver Carrito</button>
         </Link>
         <Link to='/'>
         <button className="btn btn-outline-primary">Seguir Comprando</button>
         </Link>
         </div>
         </>
         }
      </div>
    </div>
    </>
  )
}

export default ItemDetail