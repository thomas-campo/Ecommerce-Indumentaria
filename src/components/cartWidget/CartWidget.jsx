import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { cantidadTotal } = useCartContext()
    return (
        <div>
            { cantidadTotal() > 0 && cantidadTotal() }
            <img className='Carrito' src='https://thumbs.dreamstime.com/b/icono-de-carro-compra-bot%C3%B3n-circular-vector-plano-limpio-dise%C3%B1o-blanco-y-negro-ilustraci%C3%B3n-aislada-del-redondeo-concepto-167076849.jpg' alt='Carrito'/>
        </div>
    )
}

export default CartWidget