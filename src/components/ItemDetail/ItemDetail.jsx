import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  const [ isCount, setIsCount ] = useState(true)

  const { agregarCarrito } = useCartContext()

  const onAdd = (cantidad) => {
    agregarCarrito( { ...product, cantidad } )
    setIsCount(false)
  }

  return ( 
    <>
    <div className="ContainerItemDetail row">
      <div className='col'>
        <img className='imagenProductoItemDetail' src={product.imagen} alt="" />
      </div>
      <div className="descripcionProductoItemDetail col">
        <h2>{product.name}</h2>
        <h5><b>Categoria: </b>{product.categoria}</h5>
        <h5><b>Precio: </b>${product.precio}</h5>
        <h5><b>Stock: </b>{product.stock}</h5>
        <h6><b>Descripcion: </b>{product.descripcion}</h6>
        { isCount ? <ItemCount stock={10} intial={1} onAdd={onAdd}/>
         : 
         <>
         <div className="botonCount">
          <div className="botonVerCarrito">
            <Link to='/carrito'>
            <button className="btn btn-danger">Ver Carrito</button>
            </Link>
          </div>
          <div className="botonSeguirComprando">
            <Link to='/'>
            <button className="btn btn-dark">Seguir Comprando</button>
            </Link>
          </div>
         </div>
         </>
         }
      </div>
    </div>
    </>
  )
}

export default ItemDetail