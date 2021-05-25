import React,{useState} from 'react'
import { makeStyles } from '@material-ui/styles';

import PlantCard from './PlantCard';
import { useHistory } from 'react-router-dom';

const styles= makeStyles({
    container:{
    },
    form:{
        display:"flex",
        flexDirection:"column",
        border:"1px solid black",
        alignItems:"center"
    },
    species:{
        marginBottom:"5%",
        width:"60%",
    },
    nickname:{
        marginBottom:"5%"
    },
    water:{
        marginBottom:"5%",
        width:"34%"
    },
    submit:{
        width:"20%"
    },
    label:{
        fontSize:"1.5rem"
    }
})
export default function EditPlant(props) {
    console.log(props)

    const {edit,plantToEdit,setPlantList,plantList}= props
    const [CValue,setCValue]=useState(plantToEdit)
    const handleSubmit=(e)=>{
        e.preventDefault();
        edit(false);
        const update = plantList.filter((item)=>{return item.id!==plantToEdit.id})
        setPlantList([
            CValue,...update
        ])
        push('/plant-list')
    }
    const handleChange=(e)=>{
        e.preventDefault()
        const{name,value}=e.target
        setCValue({
      ...CValue,
      [name]:value      
    })}
const classes=styles()
    return (
        <div className={classes.container} >
            {/* <h2>Edit Your {props.plant.species} </h2> */}
            <form onSubmit={handleSubmit} className={classes.form}>
                <label
                 className={classes.label}
                 > Species:

                <input
                 className={classes.species}
                 onChange={handleChange}
                 value={CValue.species}
                 name="species"
                 />
                </label>
                <label className={classes.label}> Nickname:

                <input
                 className={classes.nickname}
                 onChange={handleChange}
                 value={CValue.nickname}
                 name="nickname"
                 />

                </label>

                <label
                 className={classes.label}
                 > Watering Frequency:

                <input
                 className={classes.water}
                 onChange={handleChange}
                 value={CValue.h20Frequency}
                 name="h20Frequency"
                 />

                </label>

                <button className={classes.submit}>submit</button>

            </form>
        </div>
    )
}
