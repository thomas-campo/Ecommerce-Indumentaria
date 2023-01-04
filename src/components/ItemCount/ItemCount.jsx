import { useState } from "react"

export const ItemCount = ( { stock = 5, intial = 1 ,onAdd } ) => {
    const [ count , setCount ] = useState(intial)
    const sumar = () => {
        if(count < stock){
            console.log(count)
            setCount(count + 1)
        }
    }

    const restar = () => { if(count > intial) setCount(count - 1) }

    const handleOnAdd = () => onAdd(count)
 
    return (
        <center className="mt-5 p-3">
            <button className="btn btn-outline-primary m-2" onClick={sumar}>+</button>
            <label htmlFor="">{count}</label>
            <button className="btn btn-outline-primary m-2 p" onClick={restar}>-</button>
            <button className="btn btn-outline-primary" onClick={handleOnAdd}>Agragar al Carrito</button>
        </center>
    )
}