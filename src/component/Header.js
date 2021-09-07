import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            
                
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand>Horend Animals</Navbar.Brand>
                    </Container>
                </Navbar>

        )
    }
}

export default Header
