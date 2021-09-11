import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div className='formSection'>
                <form onChange={this.props.select}>
                    <label style={{ marginRight: '15px' }}>choose number </label>
                    <select onChange={this.props.select} className='selectSection'>
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
