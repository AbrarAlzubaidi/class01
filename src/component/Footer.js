import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar bg="light">
                    <Container>
                        <Navbar.Brand >All right reserved (Abrar Alzubaidi) 2021 </Navbar.Brand>
                    </Container>
                </Navbar>
        )
    }
}

export default Footer