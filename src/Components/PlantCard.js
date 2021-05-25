import React from 'react'

export default function PlantCard(props) {
    const { plant } = props
    return (
        <div>
            <p>{plant.species}</p>
            <p>{plant.nickname}</p>
            <p>{plant.h20Frequency}</p>
            <img src={plant.image}></img>
        </div>
    )
}
