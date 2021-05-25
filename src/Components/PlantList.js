import React from 'react'
import DummyData from '../DummyData'
import PlantCard from './PlantCard'
import { makeStyles } from '@material-ui/styles';
const styles = makeStyles({
PlantList:{
    border:"1px solid red",
    width:"50%",
    backgroundColor:"grey"
},
header:{
    textAlign:"center",
},
title:{
    marginTop:"-4%",
    background:"green",
    paddingTop:"3%",
    paddingBottom:"3%"
}

})
export default function PlantList() {
const classes=styles()
    return (
        <div>
        <div className={classes.title}>
            <h3 className={classes.header}>Welcome to your Plant List</h3>
            </div>
        <div className={classes.PlantList}>
            
            {DummyData.map((item)=>{
                return(<h3><PlantCard plant={item}/> </h3>)
    })}
        </div>
        </div>
        
    )
}


