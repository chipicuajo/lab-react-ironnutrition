import React, { Component } from 'react'

export default class AddForm extends Component {

    render() {
        const{onSubmit}= this.props
        return (            
                <form onSubmit={onSubmit} autoComplete='off'>
                    <input className="input is-primary" name='name' type="text" placeholder="Name input"></input>
                    <input className="input is-primary" name='calories' type="number" placeholder="Calories input"></input>
                    <input className="input is-primary" name='image' type="text" placeholder="Image input"></input>
                    <button type="submit" className="button is-primary">Submit</button>
                </form>            
        )
    }
}
