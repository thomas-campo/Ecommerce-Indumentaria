import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../components/FetchProductos/FetchProductos'

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { categoriaId } = useParams()
    
    useEffect(() => {
        if (categoriaId) {
           const db = getFirestore()
           const queryCollection = collection(db, 'productos')
           const queryFiltrada = query(queryCollection, where( 'categoria' , '==' , categoriaId ))
           getDocs(queryFiltrada)
           .then(respuesta => setProducts( respuesta.docs.map(product => ( { id: product.id, ...product.data() } ) ) ))
           .catch(err => console.log(err))
           .finally(setLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(respuesta => setProducts( respuesta.docs.map(product => ( { id: product.id, ...product.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(setLoading(false))
        }
    },[categoriaId])
    console.log(categoriaId)

  return (
    <>
        { loading ? 
            <h2>Cargando productos...</h2> 
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}} className="text-center">
                    {   products.map( product =>    
                        <div            
                            style={{ marginLeft: 10}}
                            className='col-md-2'
                            key={product.id}> 

                            <Link to={`/detail/${product.id}`} >
                                <div className="card mt-3">
                                    <div className="card-header">
                                        <h5>
                                            {product.name} - {product.categoria}
                                        </h5>
                                    </div>
                                    <div className="card-body text-center">
                                        <img src={product.imagen} alt='' className='w-50 img-fluid'/>
                                    </div>
                            
                                    { <div className="card-footer text-center">                                                        
                                        <button className="btn btn-outline-primary btn-block">
                                            Ver mas
                                        </button>
                                        <h5>
                                        {`$${product.precio}`}
                                        </h5>
                                    </div>}
                                </div>
                            </Link>
                        </div>  
) }
                </div>
            }

    </>
  )
}

export default ItemListContainer

















     