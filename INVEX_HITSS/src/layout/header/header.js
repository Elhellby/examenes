import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import iconoboleto from '../../assets/images/iconoboleto.png'

const Header = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <h1 className="d-inline-block align-top p-2">
                            Test
                        </h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
export default Header;