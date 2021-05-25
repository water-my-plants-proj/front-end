import React from 'react'
import DummyData from '../DummyData'
import PlantCard from './PlantCard'
export default function PlantList() {
    return (
        <div>
            {DummyData.map((item)=>{
                return(<><PlantCard plant={item}/> </>)
    })}
        </div>
    )
}


