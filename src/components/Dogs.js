import React, { Component } from 'react'
import axios from 'axios';
import Dog from './Dog'
import CreateNewDog from './CreateNewDog'

class Dogs extends Component {
    constructor() {
        super()

        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        axios.get('/api/dogs').then(res => {
            this.setState({
                dogs: res.data
            })
        }).catch(err => console.log(1234, err))
    }

    createDog = newDog => {
        axios.post('/api/dogs', newDog).then(res => {
            this.setState({
                dogs: res.data
            })
        }).catch(err => console.log(1234, err))
    }

    updateDog = dog => {
        axios.put(`/api/dogs/${dog.id}`, dog).then(res => {
            this.setState({
                dogs: res.data
            })
        }).catch(err => console.log(err))
    }

    deleteDog = id => {
        axios.delete(`/api/dogs/${id}`).then(res => {
            this.setState({
                dogs: res.data
            })
        }).catch(err => console.log(1234, err))
    }

    render() {
        return (
            <div>
                <CreateNewDog createDog={this.createDog} />
                <Dog
                    dogs={this.state.dogs}
                    deleteDog={this.deleteDog}
                    updateDog={this.updateDog}
                />
            </div>
        )
    }
}
export default Dogs