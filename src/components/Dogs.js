import React, { Component } from 'react'
import axios from 'axios';
import Dog from './Dog'

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

    render() {
        return (
            <div>
                <Dog
                    dogs={this.state.dogs}
                />
            </div>
        )
    }
}
export default Dogs