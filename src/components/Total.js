import React, { Component } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';

class Total extends Component {

    render() {
        const {totalFoods} = this.props
        let total = 0;
        totalFoods.reduce((acc,e)=>{
            return total = acc + (e.calories*e.quantity)
        },0)
        return (
            <div className='column'>
                <h2> Today's foods </h2>
                {
                    totalFoods.map((e,i)=>{
                        return (
                            <p key ={i}>
                              -{e.quantity} {e.name} = {e.calories*e.quantity} cal
                            </p>
                        )
                    })
                }
                <h1> Total: {total} cal </h1>
            </div>
        )
    }
}

export default Total
