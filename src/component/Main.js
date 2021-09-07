import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends Component {
    render() {
        return (
            <div>
                {
                    < HornedBeasts title={this.title}
                        image_url={this.image_url}
                        description={this.description}
                        keyword={this.keyword}
                        shown={this.props.shown}
                    />
                }
            </div>
        )
    }
}
export default Main
