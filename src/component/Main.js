import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends Component {
    render() {
        return (
            <div>
                {
                    data.map((currentValue) => {
                   return <HornedBeasts title={currentValue.title} image_url={currentValue.image_url} description={currentValue.description} keyword={currentValue.keyword} />
                   
               })
                }
               
            </div>
        )
    }
}

export default Main
