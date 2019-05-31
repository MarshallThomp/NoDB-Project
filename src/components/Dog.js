import React, { Component } from 'react'
import Box from './Box'
import './Dog.css'

class Dog extends Component {
    

    render() {
        return (
            <div className="container">
                {this.props.dogs.map(dog => {
                    return(
                        <Box
                        key={dog.id}
                        dog={dog}
                        deleteDog={() => this.props.deleteDog(dog.id)}
                        updateDog={this.props.updateDog}
                        />
                    )
                })}
            </div>
        )
    }
}
export default Dog