import React, { Component } from 'react'

class CreateDog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            breed: '',
            color: '',
            vaccinated: '',
            favoriteThings: ''
        }
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    addDog =() => {
        let { name, breed, color, vaccinated, favoriteThings } = this.state

        let favoriteThingsArr = favoriteThings.split(',')

        let newDog = {
            name,
            breed,
            color,
            vaccinated,
            favoriteThings : favoriteThingsArr
        }
        
        this.props.createDog(newDog)
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
                <button onClick={this.addDog}>Add Dog</button>
            </div>
        )
    }
}
export default CreateDog