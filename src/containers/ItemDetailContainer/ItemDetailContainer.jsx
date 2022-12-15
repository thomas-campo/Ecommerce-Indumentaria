import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    
    const { productoId } = useParams()
    console.log(productoId)
    

    return (
        <ItemDetail/>
    )
}

export default ItemDetailContainer