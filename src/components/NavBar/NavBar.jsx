import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'

import './NavBar.css'

const categoriaList = [
    {id:'frertfe', nombre:'Remeras', path:'remeras'},
    {id:'eefjijei', nombre:'Pantalones', path:'pantalones'},
    {id:'foskfokf', nombre:'Zapatillas', path:'zapatillas'}
]
 
const NavBar = () => {

    return (
        <>
            <Navbar  className='containerNavBar navBar' collapseOnSelect expand="lg" bg="white" variant="w">
                <Container className='container'>
                    <Navbar.Toggle className='botonResponsivo' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='containerNavBar' id="responsive-navbar-nav">
                    <Nav>
                        { categoriaList.map( ( {id, nombre, path } ) =>
                            <NavLink key={id} className='BotonNavBar' to={`/categoria/${path}`}>
                            {`${nombre}`}
                            </NavLink>
                        )}
                    </Nav>
                    </Navbar.Collapse>
                    <NavLink className='logoSitio' to='/'>
                    <div>
                        <p className='nombreSitio'>Ecco</p>
                        <p className='letraNombre'>merce</p>
                    </div>
                    </NavLink>
                    <Nav>
                        <Link className='botonCarrito' to="/carrito">
                            <CartWidget/>
                        </ Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


