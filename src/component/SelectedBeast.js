import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
class SelectedBeast extends Component {

    render() {
        let title=this.props.title
        let description=this.props.description;
        let image_url= this.props.image_url;
        console.log(image_url);

        return (

            <Modal show={this.props.showModal} onHide={this.props.hidden}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <img className="modal-content" src={image_url} alt='..' />

                    {description}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={this.props.hidden}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>

        )
    }
}

export default SelectedBeast
