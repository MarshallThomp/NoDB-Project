import React from 'react'
import EditDog from './EditDog'

class Display extends React.Component {
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
        let { dog, updateDog } = this.props
        return (
            <div className="dog-card">
                {this.state.edit ?
                    <EditDog
                        dog={dog}
                        updateDog={updateDog}
                        toggleEdit={this.toggleEdit} />
                    :
                    <div>
                        <h2>{dog.name}</h2>
                        <p><b>Breed:</b> {dog.breed}</p>
                        <p><b>Color:</b> {dog.color}</p>
                        <p><b>Vaccinated:</b> {dog.vaccinated}</p>
                        <ul><b>Favorite Things:</b>
                            {dog.favoriteThings.map((thing, i) => {
                                return <p key={i}>{thing}</p>
                            })}
                        </ul>
                    </div>
                }
                {this.state.edit ?
                    <button onClick={this.toggleEdit}>cancel</button>
                    :
                    <button onClick={this.toggleEdit}>edit</button>
                }
                <button onClick={this.props.deleteDog}>delete</button>
            </div>
        )
    }
}
export default Display