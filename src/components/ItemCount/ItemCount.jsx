import { useState } from "react"

export const ItemCount = ( { stock = 5, intial = 1 ,onAdd } ) => {
    const [ count , setCount ] = useState(intial)
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => { if(count > intial) setCount(count - 1) }

    const handleOnAdd = () => onAdd(count)
 
    return (
        <center className="itemCount">
            <button className="btn btn-danger m-3" onClick={sumar}>+</button>
            <label htmlFor="">{count}</label>
            <button className="rest btn btn-danger m-3" onClick={restar}>-</button>
            <button className="btn btn-danger m-3" onClick={handleOnAdd}>Agragar al Carrito</button>
        </center>
    )
}