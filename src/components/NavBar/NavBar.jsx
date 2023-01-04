import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'

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
                        <Link to="/carrito">
                            <CartWidget/>
                        </ Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


