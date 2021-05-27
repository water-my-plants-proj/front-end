import React from 'react'
import { makeStyles } from '@material-ui/styles'

export default function PlantCard(props) {
    const { plant,returnPlantId} = props
    const Styles = makeStyles({
        Cont:{
            border:"10px solid green",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            width:"90%",
            margin:"0 auto",
            marginBottom:"5%",
            
        },
        textCont:{
            marginBottom:"5%",
            display:"flex",
            alignItems: "left",
            flexDirection: "column",
            justifyContent:"center",
            marginRight:"10%",
         
        },
        imgCont:{
            width:"50%",
            paddingTop:"5%"
           
        },
        img:{
            width:"80%",
            borderRadius:"30%",
            
        },
        edit:{
            width:"50%",
            marginLeft:"10%"
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
            <p className={classes.text}> Species: {plant.species}</p>
            <p className={classes.text}> Nickname:{plant.nickname}</p>
            <p className={classes.text}> Watering Frequency:{plant.h2oFrequency}</p>
            <button onClick={handleClick} className={classes.edit}>Edit</button>
            </div>
            <div className={classes.imgCont}>
            </div>
        </div>
    )
}
