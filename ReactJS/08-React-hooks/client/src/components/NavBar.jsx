import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import NavbarText from 'react-bootstrap/esm/NavbarText';

function NavBar() {
    const { user } = useContext(UserContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to='/'>React-Custom Hooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/articles/create'>Create</Nav.Link>
                        <Nav.Link as={Link} to='/articles'>Articles</Nav.Link>
                        <Nav.Link as={Link} to='/fake-login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <NavbarText>{user.username ? user.username : 'Guest'}</NavbarText>
            </Container>
        </Navbar>
    );
}

export default NavBar;