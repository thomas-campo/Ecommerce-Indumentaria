import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../components/FetchProductos/FetchProductos'



const ItemListContainer = () => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { categoriaId } = useParams()
    
    useEffect(()=>{
        if (categoriaId) {
            gFetch()
            .then( resp =>  setProducts(resp.filter(product => product.categoria === categoriaId )) )
            .finally(()=> setLoading(false))             
        } else {
            gFetch()
            .then( resp =>  setProducts(resp) )
            .finally(()=> setLoading(false))            
        }   
    }, [categoriaId])
  
  return (
    <>
        { loading ? 
            <h2>Cargando productos...</h2> 
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
                    {   products.map( product =>    
                            <div            
                            style={{ marginLeft: 100}}
                            className='col-md-3'
                            key={product.id}> 

                            <Link to={`/detail/${product.id}`} >
                                
                                <div className="card w-100 mt-5">
                                    <div className="card-header">
                                        {`${product.name} - ${product.categoria}`}
                                    </div>
                                    <div className="card-body text-center ">
                                        <img src={product.imagen} alt='' className='w-50 img-fluid'/>                                                          
                                    </div>
                            
                                    { <div className="card-footer text-center">                                                        
                                        <button className="btn btn-outline-primary btn-block">
                                            Ver mas
                                        </button>
                                        <h6>
                                        {`$${product.precio}`}
                                        </h6>
                                    </div>}
                                </div>
                            </Link>
                    </div>  
) 
                    }
                </div>
            }

    </>
  )
}

export default ItemListContainer

















     