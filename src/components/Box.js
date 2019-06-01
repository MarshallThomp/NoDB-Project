import React from 'react'
import EditDog from './EditDog'
import './Box.css'


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
        console.log(dog.favoriteThings)
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
                        <div className="line"></div>
                        <p><b>Breed:</b> {dog.breed}</p>
                        <p><b>Color:</b> {dog.color}</p>
                        <p><b>Vaccinated:</b> {dog.vaccinated}</p>
                        <p><b>Favorite Things:</b></p>
                        {dog.favoriteThings.map((thing, i) => {
                            //  console.log(favoriteThings)
                            return <p key={i}>{thing}
                            {/* {console.log(i)} */}
                            </p>
                                                  
                        })}
                    </div>
                }
                <div className="box-buttons">
                    {this.state.edit ?
                        <button className="box_cancel" onClick={this.toggleEdit}>cancel</button>
                        :
                        <button className="box_edit" onClick={this.toggleEdit}>edit</button>
                    }
                    <button className="delete" onClick={this.props.deleteDog}>delete</button>
                </div>
            </div>
        )
    }
}
export default Display