import React, { Component } from 'react'

export default class Search extends Component {

    render() {

        return (
            <div>
                <input onChange={this.props.onSearch} className="input is-rounded" type="text" placeholder="Rounded input"></input>
            </div>
        )
    }
}
