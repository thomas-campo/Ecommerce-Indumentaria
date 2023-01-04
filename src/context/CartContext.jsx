import { useContext, useState } from "react";
import { createContext } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export const CartContextProvider = ({ children }) => {
    
    const [ cartList, setCartList ] = useState([])

    const agregarCarrito = (producto) => {
        const indexItem = cartList.findIndex(product => product.id === producto.id)
        if(indexItem === -1){
            setCartList( [ ...cartList, producto ] )
        } else {
            cartList[indexItem].cantidad += producto.cantidad
            setCartList( [ ...cartList ] )
        }

    }

    const vaciarCarrito = () => setCartList([])

    //precio total
    const precioTotal = () => cartList.reduce((count, product) => count += (product.cantidad * product.precio), 0)
    //cantidadtotal
    const cantidadTotal = () => cartList.reduce((count, product) => count += product.cantidad, 0)


    //eliminar por item
    const eliminarItem = ( id ) => setCartList(cartList.filter(product => product.id !== id ))
    
    //bug mismo item muchas veces

    return (
        <cartContext.Provider value={{cartList, agregarCarrito, vaciarCarrito, cantidadTotal, precioTotal, eliminarItem}}>
            { children }
        </cartContext.Provider>
    )
}
