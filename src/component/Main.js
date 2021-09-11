import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className='row'>

                {
                    data.map((currentValue) => {
                        return <HornedBeasts title={currentValue.title}
                            image_url={currentValue.image_url}
                            description={currentValue.description}
                            keyword={currentValue.keyword}
                            horns={currentValue.horns}
                            shown={this.props.shown}
                        />
                    })
                }

            </div>
        )
    }
}
export default Main
