import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col } from 'react-bootstrap';
class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: 0
        }

    }

    incrementClick = () => {
        this.setState({
            fav: this.state.fav + 1
        })
    }

    render() {
        return (

            <div className="container">
                        
                            <Card style={{ width: '18rem' }} className='cardSection'>
                                <Card.Img variant="top" src={this.props.image_url} onClick={this.incrementClick} />
                                <Card.Body>
                                    <Card.Title >{this.props.title}</Card.Title>
                                    <Card.Text>
                                        ❤️: {this.state.fav}
                                        <br />
                                        number of horns: {this.props.horns}
                                    </Card.Text>

                                    <Button onClick={() => this.props.shown(this.props.title, this.props.description, this.props.image_url)} variant="primary">description</Button>
                                </Card.Body>
                            </Card>
                        
            </div>
        )
    }
}

export default HornedBeasts
