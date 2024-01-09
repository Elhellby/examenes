import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="bg-light border-top py-2 fixed-bottom">
                <Container>
                    &copy; Test - 2023
                </Container>
            </footer>
        </React.Fragment>
    );
}
export default Footer;