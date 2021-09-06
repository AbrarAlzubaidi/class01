import React, { Component } from 'react'

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
            <div>
                <h2> title :{this.props.title} </h2>
                <img src={this.props.image_url} alt={this.props.keyword} onClick={this.incrementClick} />
                <p> description:{this.props.description} </p>
                <h3>number of votes: {this.state.fav}<img src='https://proofmart.com/wp-content/uploads/2021/06/5.png' alt='heart' style={{height:'50px', width:'50px', margin:'auto auto auto 10px'}}/></h3>

            </div>
        )
    }
}

export default HornedBeasts
