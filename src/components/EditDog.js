import React, { Component } from 'react'
import './EditDog.css'

class EditDog extends Component {
    constructor(props) {
        super(props)

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

    handleFavorites = e => {
        let { value, name } = e.target

        let arr = value.split(',')
        this.setState({
            [name] : arr
        })
    }

    handleClick = () => {
        let updatedDog = {...this.props.dog, ...this.state}
        console.log(updatedDog)
        this.props.updateDog(updatedDog)
        this.props.toggleEdit()
    }

    render() {
        return(
            <div className="edit_dog">
                <input
                className="inputs name_edit" 
                type="text"
                name="name"
                placeholder="name"
                onChange={this.handleChange}
                value={this.state.name}
                />
                <input 
                className="inputs breed_edit"
                type="text"
                name="breed"
                placeholder="breed"
                onChange={this.handleChange}
                value={this.state.breed}
                />
                <input 
                className="inputs color_edit"
                type="text"
                name="color"
                placeholder="color"
                onChange={this.handleChange}
                value={this.state.color}
                />
                <select
                className="inputs vaccinated" 
                type="text"
                name="vaccinated"
                placeholder="vaccinated"
                onChange={this.handleChange}
                value={this.state.vaccinated}
                >
                    <option>vaccinated</option>
                    <option>yes</option>
                    <option>no</option>
                </select>
                <input 
                className="inputs favoriteThings_edit"
                type="text"
                name="favoriteThings"
                placeholder="list: balls, ropes, old socks"
                onChange={this.handleFavorites}
                value={this.state.favoriteThings}
                />
                <button className="update" onClick={this.handleClick}>Update Dog's Info</button>
            </div>
        )
    }
} 

export default EditDog