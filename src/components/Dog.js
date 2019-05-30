import React, { Component } from 'react'
import Box from './Box'
// import EditDog from './EditDog'

class Dog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        return (
            <div>
                {this.props.dogs.map(dog => {
                    return(
                        <Box
                        key={dog.id}
                        dog={dog}
                        edit={this.state.edit}
                        toggleEdit={this.toggleEdit}
                        deleteDog={this.props.deleteDog}
                        updateDog={this.props.updateDog}
                        />
                    )
                })}
            </div>
        )
    }
}
export default Dog