import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import "./itemListContainer.css"

const ItemListContainer = () => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { categoriaId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'productos')

        const queryFiltrada = categoriaId ? query(queryCollection, where( 'categoria' , '==' , categoriaId )) : queryCollection

        getDocs(queryFiltrada)
            .then(respuesta => setProducts( respuesta.docs.map(product => ( { id: product.id, ...product.data() } ) ) ))
            .catch(err => console.log(err))
            .finally( () => setLoading(false))
    },[categoriaId])

  return (
    <>

        <div className='containerItemListContainer'>

            <div>
                <img className='imagenPromocion' src="https://qafacol.vteximg.com.br/arquivos/FAC-SALE-2022-1-mob.jpg?v=637897870742670000" alt="" />
            </div>
            { loading ? 
                <h2>Cargando productos...</h2> 
                    :
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}} className="cardContainer">
                        {   products.map( product =>    
                            <div style={{ marginLeft: 10}} className='cardItemListContainer' key={product.id}> 

                                    <div className="cardProducto">
                                        <div className="text-center">
                                            <img src={product.imagen} alt='' className='w-50 img-fluid'/>
                                        </div>
                                        <div className=" card-footer text-center">
                                            <h6 className='nombreProducto'>
                                                {product.name}
                                            </h6>
                                            <p>
                                            {`$${product.precio}`}
                                            </p>
                                            <Link to={`/detail/${product.id}`} >
                                                <button className="btn accordion btn-danger btn-block">
                                                    Ver mas
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                            </div>  
                        )}
                    </div>
            }

        </div>

    </>
  )
}

export default ItemListContainer

















     