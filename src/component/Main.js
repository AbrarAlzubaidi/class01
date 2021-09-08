import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends Component {
    render() {
        let title = this.props.title;
        let image_url = this.props.image_url;
        let description = this.props.description;
        let keyword = this.props.keyword;
        let shown = this.props.shown;
        return (
            <div>
                {
                    < HornedBeasts title={title}
                        image_url={image_url}
                        description={description}
                        keyword={keyword}
                        shown={shown}
                    />
                }
            </div>
        )
    }
}
export default Main
