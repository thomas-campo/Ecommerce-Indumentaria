import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import './NavBar.css'


const NavBar = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-warning' : 'btn btn-outline-warning'} to='/'>Ecommerce</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-danger' : 'btn btn-outline-danger'} to="/categoria/remeras">
                            Remeras
                        </NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-danger' : 'btn btn-outline-danger'} to="/categoria/pantalones">
                            Pantalones
                        </NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-danger' : 'btn btn-outline-danger'} to="/categoria/zapatillas">
                            Zapatillas
                        </NavLink>
                        
                    </Nav>
                    <Nav>
                        <Link>
                            <img className='Carrito' src='https://thumbs.dreamstime.com/b/icono-de-carro-compra-bot%C3%B3n-circular-vector-plano-limpio-dise%C3%B1o-blanco-y-negro-ilustraci%C3%B3n-aislada-del-redondeo-concepto-167076849.jpg' alt='Carrito'/>
                        </ Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


