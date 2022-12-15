
const ItemDetail = ({ product }) => {
   console.log(product)
  return (
    <>
      <div className='container'>
        <h2 className='col-md-12'>{product.name}</h2>
        <div className='col-md-6'>
        <img className='img-fluid' src={product.imagen} alt="" />
        </div>
        <div className='col-md-6'>
        <h5>${product.precio}</h5>
        <h5>Stock = {product.stock}</h5>
        </div>
      </div>
    </>
  )
}

export default ItemDetail