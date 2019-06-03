import React, { Component } from 'react'
import './CreateNewDog.css'
import paw from '../paw-solid.svg'

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

        this.setState({
            name: '',
            breed: '',
            color: '',
            vaccinated: '',
            favoriteThings: '' 
        })
    }

    render() {
        return(
            <div >
                <h2 className="addDog">Welcome to the Park!</h2>
                <div className="createDog-div">
                <input
                className="input name" 
                type="text"
                name="name"
                placeholder="name"
                onChange={this.handleChange}
                value={this.state.name}
                />
                <input 
                className="input breed"
                type="text"
                name="breed"
                placeholder="breed"
                onChange={this.handleChange}
                value={this.state.breed}
                />
                <input 
                className="input color"
                type="text"
                name="color"
                placeholder="color"
                onChange={this.handleChange}
                value={this.state.color}
                />
                <select
                className="input vaccinated" 
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
                className="input favoriteThings" 
                type="text"
                name="favoriteThings"
                placeholder="list: balls, ropes, old socks"
                onChange={this.handleChange}
                value={this.state.favoriteThings}
                />
                <button className="createDog-button" onClick={this.addDog}>
                    <img className="button-icon" src={paw} alt=""/>
                    Add Dog
                    </button>
                </div>
            </div>
        )
    }
}
export default CreateDog