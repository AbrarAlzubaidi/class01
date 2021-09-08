import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
class SelectedBeast extends Component {

    render() {
        return (

            <Modal show={this.props.showModal} onHide={this.props.hidden}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hidden}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}

export default SelectedBeast
