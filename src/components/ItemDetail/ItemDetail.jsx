import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../components/FetchProductos/FetchProductos'

const ItemDetail = () => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { productoId } = useParams()
    
    useEffect(()=>{
        if (productoId) {
            gFetch()
            .then( resp =>  setProducts(resp.filter(product => product.producto === productoId )) )
            .finally(()=> setLoading(false))             
        } else {
            gFetch()
            .then( resp =>  setProducts(resp) )
            .finally(()=> setLoading(false))            
        }   
    }, [productoId])
  return (
    <>
      <h2>{ (productoId === products.id) }</h2>

    </>
  )
}

export default ItemDetail