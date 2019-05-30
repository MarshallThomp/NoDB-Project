import React, { Component } from 'react'

class EditDog extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)

        let { name, breed, color, vaccinated, favoriteThings } = this.props.dog
        this.state = {
            name, 
            breed,
            color,
            vaccinated,
            favoriteThings
        }
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value 
        })
    }

    handleClick = () => {
        let updatedDog = {...this.props.dog, ...this.state}
        console.log(1234, updatedDog)
        this.props.updateDog(updatedDog)
    }

    render() {
        return(
            <div>
                <input 
                type="text"
                name="name"
                placeholder="name"
                onChange={this.handleChange}
                value={this.state.name}
                />
                <input 
                type="text"
                name="breed"
                placeholder="breed"
                onChange={this.handleChange}
                value={this.state.breed}
                />
                <input 
                type="text"
                name="color"
                placeholder="color"
                onChange={this.handleChange}
                value={this.state.color}
                />
                <input 
                type="text"
                name="vaccinated"
                placeholder="vaccinated"
                onChange={this.handleChange}
                value={this.state.vaccinated}
                />
                <input 
                type="text"
                name="favoriteThings"
                placeholder="list: balls, ropes, old socks"
                onChange={this.handleChange}
                value={this.state.favoriteThings}
                />
                <button onClick={this.handleClick}>Update Dog's Info</button>
            </div>
        )
    }
} 

export default EditDog