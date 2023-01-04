import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../components/FetchProductos/FetchProductos"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [ product , setProduct ] = useState({})
    const { productoId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db,'productos',productoId)
        getDoc(queryDoc)
        .then(respuesta => setProduct( { id: respuesta.id, ...respuesta.data() } ))
    },[])

    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer