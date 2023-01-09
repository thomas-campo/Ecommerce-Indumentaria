import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import "./CartContainer.css"

const CartContainer = () => {
    const [ inputEstado, setInputEstado ] = useState(true)
    const [ dataForm, setDataForm ] = useState({
        nombre:'',
        apellido:'',
        email:'',
        confirmacionEmail:'',
        telefono:'',
    })
    const [ boleta, setBoleta ] = useState([]) 
    const [ estadoIdCompra, setEstadoIdCompra ] = useState(true)
    const [ loading, setLoading ] = useState(true) 

    const { cartList, vaciarCarrito, precioTotal, eliminarItem, cantidadTotal } = useCartContext()
    
    useEffect(() => {
        const db = getFirestore()
        
        const queryCollection = collection(db, 'orders')

        const queryFiltrada = dataForm.email ? query(queryCollection, where( 'email' , '==' , dataForm.email )) : queryCollection

        getDocs(queryFiltrada)
            .then(respuesta => setBoleta( respuesta.docs.map(product => ( { id: product.id } ) ) ))
            .catch(err => console.log(err))
            .finally( () => setLoading(false))
    },[dataForm])

    const  btnInputEstado = () => {
        setInputEstado(!inputEstado)
    }

    const generarOrden = (dataForm) => {
        
        const order = {}
        
        order.buyer = dataForm
        
        order.item = cartList.map( ({ name, id, precio, cantidad }) => ({ name, id, precio, cantidad }) )

        order.total = precioTotal()
        
        const db = getFirestore()
        
        const queryOrder = collection(db, 'orders')
        

        addDoc(queryOrder, order)
        .then( resp => (resp) )
        .catch(err => console.log(err))
        .finally(() => {
            vaciarCarrito()
            setDataForm({
                name:"",
                apellido:"",
                email:"",
                telefono:""
            })
        })

    }
    
    return (
        <>
        { cantidadTotal() === 0 &&
        <div className="divCarritoVacio">
            { estadoIdCompra ? <></> : 
                 loading ? <div>Cargando Boleta</div> :  
                <div className="checkOut">
                    <div className="idCompra">
                        {boleta.map( product => 
                            <div key={product.id}>
                                <p><b>ID de la compra: </b>{product.id}</p>
                            </div>
                        )}
                    </div>
                </div>
            }
            <div>
                <div className={ estadoIdCompra ? "carritoVacio" : "carritoVacioConIdCompra"}>
                    <h2>Tu Carrito esta vacío</h2>
                    <Link to='/'>
                        <button className="btn btn-danger">Ver Productos</ button>
                    </Link>
                </div>
            </div>
        </div>
        }
        { cantidadTotal() !== 0 && 
        <div className="containerCarrito">
                <div className="CarritoCard">
                    { cartList.map(product =>
            
                        <div className="cardsProductos" key={product.id}>
                            <img src={product.imagen} alt={product.name} className="imagenProducto"/>
                                <div className="descripcionProductos">
                                    <p>
                                        {product.name} - Cantidad: {product.cantidad} - Precio: ${product.precio}
                                        <button className="botonEliminar btn btn-danger" onClick={ () => eliminarItem(product.id) }>X</button>
                                    </p>
                                </div>
                        </div>
                    
                    )}
                    { precioTotal() > 0 && <label className="precioTotal">Precio Total: { precioTotal() }</label> }
                    <div className="divBotonesVaciarGenerar">
                    <button className="btn btn-dark" onClick={btnInputEstado}>Generar Orden</button>
                    <button className="btn btn-danger" onClick={vaciarCarrito} >Vaciar Carrito</button>
                    </div>
                </div>
            { inputEstado ? <></> : 
                <Formik
                    initialValues={{
                        nombre:'',
                        apellido:'',
                        email:'',
                        confirmacionEmail:'',
                        telefono:'',
                    }}
                    validate={(valores) => {
                        let errors = {}
                        
                        //validacion del nombre
                        if(!valores.nombre){
                            errors.nombre = 'Porfavor ingresa un nombre.'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                            errors.nombre = 'El nombre solo puede contener letras y espacios.'
                        }

                        //validacion de apellido
                        if(!valores.apellido){
                            errors.apellido = 'Porfavor ingresa un apellido.'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
                            errors.apellido = 'El apellido solo puede contener letras y espacios.'
                        }

                        //validacion de email
                        if(!valores.email){
                            errors.email = 'Porfavor ingresa un email.'
                        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                            errors.email = 'El email solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                        }

                        //validacion de confirmacionEmail
                        if(!valores.confirmacionEmail){
                            errors.confirmacionEmail = 'Porfavor ingresa un email.'
                        } else if((valores.email) !== (valores.confirmacionEmail)){
                            errors.confirmacionEmail = 'Ambos emails tienen que ser iguales.'
                        }

                        //validacion de telefono
                        if(!valores.telefono){
                            errors.telefono = 'Porfavor ingresa un email.'
                        } else if(!/^\d{7,14}$/.test(valores.telefono)){
                            errors.telefono = 'El telefono solo puede contener numeros, el minimo es de 7 digitos y el maximo es de 14 digitos.'
                        }
                        return errors
                    }}
                    onSubmit={(valores) => {
                        setDataForm(valores)
                        generarOrden(valores)
                        setEstadoIdCompra(false)
                        setTimeout(() => {
                            setEstadoIdCompra(true)
                        }, 5000)
                    }}
                >
                    {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                    <form className="formularioContainer" onSubmit={handleSubmit}>
                        <div>
                            <label className="labelFormulario" htmlFor="nombre">Nombre</label>
                            <div className="grupoInput">
                                <input 
                                    type="text" 
                                    className="InputFormulario form-control" 
                                    id="nombre"
                                    name="nombre" 
                                    value={values.nombre} 
                                    placeholder="Ingrese su Nombre" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.nombre && errors.nombre &&
                                    <div>
                                        <FontAwesomeIcon className="iconoError" icon={faCircleXmark} />
                                    </div> 
                                }
                            </div>
                            {touched.nombre && errors.nombre &&      
                                <p className="textoError">{errors.nombre}</p>
                                }
                        </div>
                        <div>
                            <label className="labelFormulario" htmlFor="apellido">Apellido</label>
                            <div className="grupoInput">
                                <input 
                                    type="text" 
                                    className="InputFormulario form-control" 
                                    id="apellido"
                                    name="apellido" 
                                    value={values.apellido} 
                                    placeholder="Ingrese su Apellido" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.apellido && errors.apellido &&
                                    <div>
                                        <FontAwesomeIcon className="iconoError" icon={faCircleXmark} />
                                    </div> 
                                }
                            </div>
                            {touched.apellido && errors.apellido &&
                                <p className="textoError">{errors.apellido}</p>
                                }
                        </div>
                        <div>
                            <label className="labelFormulario" htmlFor="email">Email</label>
                            <div className="grupoInput">
                                <input 
                                    type="text" 
                                    className="InputFormulario 
                                    form-control" 
                                    id="email" 
                                    name="email" 
                                    value={values.email}
                                    placeholder="Ingrese el email" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email &&
                                    <div>
                                        <FontAwesomeIcon className="iconoError" icon={faCircleXmark} />
                                    </div> 
                                }
                            </div>
                            {touched.email && errors.email &&
                                <p className="textoError">{errors.email}</p>
                                }
                        </div>
                        <div>
                            <label className="labelFormulario" htmlFor="confirmacionEmail">Confirmar email</label>
                            <div className="grupoInput">
                                <input 
                                    type="text" 
                                    className="InputFormulario form-control" id="confirmacionEmail" 
                                    name="confirmacionEmail" 
                                    placeholder="Confirmar email"
                                    value={values.confirmacionEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.confirmacionEmail && errors.confirmacionEmail &&
                                    <div>
                                        <FontAwesomeIcon className="iconoError" icon={faCircleXmark} />
                                    </div> 
                                }
                            </div>
                            { touched.confirmacionEmail && errors.confirmacionEmail && 
                                <p className="textoError">{errors.confirmacionEmail}</p>
                            }
                        </div>
                        <div className="InputTelefono">
                            <label className="labelFormulario" htmlFor="telefono">Teléfono</label>
                            <div className="grupoInput">
                                <input 
                                    type="text" 
                                    className="InputFormulario 
                                    form-control" id="telefono" 
                                    name="telefono"
                                    placeholder="Ingrese el teléfono"
                                    value={values.telefono}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.telefono && errors.telefono &&
                                    <div>
                                        <FontAwesomeIcon className="iconoError" icon={faCircleXmark} />
                                    </div> 
                                }
                            </div>
                            {touched.telefono && errors.telefono &&   
                                <p className="textoError">{errors.telefono}</p>
                            }
                        </div>
                        <div className="divBotonEnviar">
                            <button className="botonEnviar btn btn-dark" type="submit">Enviar</button>
                        </div>
                    </form>
                    )}
                </Formik>
            }
        </div>
        }
        </>
    )
}

export default CartContainer