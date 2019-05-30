import React, { Component } from 'react'
import Box from './Box'

class Dog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.dogs.map(dog => {
                    return(
                        <Box
                        key={dog.id}
                        dog={dog}
                        />
                    )
                })}
            </div>
        )
    }
}
export default Dog