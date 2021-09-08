import React, { Component } from 'react'
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
            <div className='row'>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image_url} onClick={this.incrementClick} />
                        <Card.Body>
                            <Card.Title >{this.props.title}</Card.Title>
                            <Card.Text>
                                number of votes: {this.state.fav}(❤️)
                                {/* {<img src='https://proofmart.com/wp-content/uploads/2021/06/5.png'
                                    alt='heart'
                                    style={{ height: '50px', width: '50px', margin: 'auto auto auto 10px' }}
                                />} */}

                            </Card.Text>

                            <Button onClick={() => this.props.shown(this.props.title, this.props.description)} variant="primary">description</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default HornedBeasts
