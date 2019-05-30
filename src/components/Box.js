import React, { Component } from 'react'

function Display(props) {
    let { dog } = props
    return (
        <div className="dog-card">
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
    )
}
export default Display