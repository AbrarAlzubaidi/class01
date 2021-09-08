import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
               <form onChange={this.props.select}>
                <label style={{marginRight:'15px'} }>choose number </label>
                    <select placeholder='Number of horns' onChange={ this.props.select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Form
