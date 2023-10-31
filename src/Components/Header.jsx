import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({isHeaderLogout}) {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#90ee90' }}>
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Project Fair</Link></Navbar.Brand>
                { isHeaderLogout &&
                    <div className='btn btn-linkms-auto text-primary fw-bolder fs-5'>Logout
                    <i className='fa-solid fa-arrow-right-from-bracket fa-beat-fade'></i></div>
          
                }
            </Container>
        </Navbar>
    );
}

export default Header