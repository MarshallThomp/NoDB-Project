import React from 'react'
import EditDog from './EditDog'

function Display(props) {
    let { dog, edit, toggleEdit, updateDog } = props
    return (
        <div className="dog-card">
            {edit ?
                <EditDog 
                dog={dog}
                updateDog={updateDog} />
                :
                <div>
            <h2>{dog.name}</h2>
            <p><b>Breed:</b> {dog.breed}</p>
            <p><b>Color:</b> {dog.color}</p>
            <p><b>Vaccinated:</b> {dog.vaccinated}</p>
            <ul><b>Favorite Things:</b>
                <li>{dog.favoriteThings[0]}</li>
                <li>{dog.favoriteThings[1]}</li>
                <li>{dog.favoriteThings[2]}</li>
            </ul>
            </div>
            }
            {edit ?
                <button onClick={toggleEdit}>cancel</button>
                :
                <button onClick={toggleEdit}>edit</button>
            }
            <button onClick={props.deleteDog}>delete</button>
        </div>
    )
}
export default Display