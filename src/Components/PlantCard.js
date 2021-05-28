
import React from 'react'
import { makeStyles } from '@material-ui/styles'

export default function PlantCard(props) {
    const { plant,returnPlantId} = props
    const Styles = makeStyles({
        Cont:{
            border:"5px solid #f3f2da",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            width:"50%",
            margin:"0 auto",
            marginBottom:"5%",
            borderRadius:"20%",
        },
        textCont:{
            display:"flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent:"center",
            backgroundColor:"black",
            width:"100%",
            borderRadius:"20%"
        },
        edit:{
            width:"25%",
            marginBottom:"10%",
            backgroundColor:"pink",
            fontSize:"1rem",
            fontFamily:"fantasy",
            textAlign:"center"
        },
        text:{
            color:"white",
            fontFamily:"cursive"
        }
        })

        const handleClick=(e)=>{
            e.preventDefault()
            returnPlantId(plant.plant_id)
        }  
        const classes = Styles()
    return (
        <div className={classes.Cont}>
            <div className={classes.textCont}>
            <p className={classes.text}> Species:  {plant.species}</p>
            <p className={classes.text}> Nickname: {plant.nickname}</p>
            <p className={classes.text}> Watering Frequency: {plant.h2oFrequency}</p>
            <button onClick={handleClick} className={classes.edit}>Edit your Plant</button>
            </div>
            <div className={classes.imgCont}>
            </div>
        </div>
    )
}