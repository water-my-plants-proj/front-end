import React from 'react'
import DummyData from '../DummyData'

export default function PlantList() {
    return (
        <div>
            {DummyData.map((item)=>{
                return (
                    <div>
                       <p>{item.species}</p> 
                        <p>{item.nickname}</p>
                        <p>{item.h20Frequency}</p>
                        <img src={item.image}></img>
                    </div>
                )
            })}
        </div>
    )
}


