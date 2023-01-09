import { useCartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadTotal } = useCartContext()
    return (
        <>
            <div className="divLogoCarrito">
                <FontAwesomeIcon className="carritoLogo fa-xl" icon={faCartShopping}/>
                { cantidadTotal() > 0 && 
                <div className="tamañoCantidadCarrito">
                    <div className="divCantidadCarrito">
                        <p className="cantidadCarrito">
                        { cantidadTotal() > 0 && cantidadTotal()}
                        </p>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default CartWidget