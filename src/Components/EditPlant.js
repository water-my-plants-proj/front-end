import React,{useState} from 'react'
import { makeStyles } from '@material-ui/styles';
import {connect} from 'react-redux'
import axiosWithAuth from '../Utils/AxiosWithAuth';
import {deletePlant} from '../Actions/Index';
import{editPlant} from '../Actions/Index'

const styles= makeStyles({
    container:{
        width: "50%",
        backgroundColor:"grey",
       
    },
    deletePlant:{
        margin:"0 auto",
        marginTop:"10%",
        marginBottom:"10%"
    },
    sidebar: {
        position:"fixed",
        top:"0.5",
        border:"2px solid green",
    },
    header:{
        backgroundColor:"green",
        marginTop:"-2%",
        width:"90%",
        margin:"0 auto"
    },
    form:{
        display:"flex",
        flexDirection:"column",
        alignItems:"left",
        marginTop:"10%",
        paddingBottom:"30%",
        paddingTop:"20%",
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
        width:"30%"
    },
    submit:{
        width:"20%",
        display: "block",
        margin: "0 auto"
    },
    label:{
        fontSize:"1.5rem"
    },
})

function EditPlant(props) {
    const { edit, plantToEdit, editPlant, deletePlant } = props
    const [ CValue, setCValue ] = useState(plantToEdit)
    // console.log("-------------CVALUE----------", CValue)
    // console.log("-------------PROPS--------------", props)
    const handleDelete=(e)=>{
        e.preventDefault()
        axiosWithAuth()
        .delete(`/plants/plants/${plantToEdit.plant_id}`)
        .then(res => {
            deletePlant(plantToEdit.plant_id)
        })
        .catch(err => {
            console.log("DELETE ERROR", err)
        })
        edit(false)
    }
    
    const handleSubmit = e => {
        console.log("PLANT_TO_EDIT_ID", plantToEdit.plant_id)
        e.preventDefault();
        axiosWithAuth().put(`/plants/plants/${plantToEdit.plant_id}`, CValue)
        .then(res => {
            editPlant(CValue)
            edit(false);
        })
        .catch(err => {
            console.log("ERROR", Object.keys(err))
        })
    }
    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setCValue({
            ...CValue,
            [name]:value,   
    })}


const classes=styles()
    return (
        <div className={classes.container} >
             <div className={classes.sidebar}>
            <div className={classes.header}>
            <h2>Edit Your {CValue.species} </h2> 
            </div>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label
                    className={classes.label}
                >Species:
                <input
                    className={classes.species}
                    onChange={handleChange}
                    value={CValue.species}
                    name="species"
                 />
                </label>
                <label 
                    className={classes.label}
                > Nickname:
                <input
                    className={classes.nickname}
                    onChange={handleChange}
                    value={CValue.nickname}
                    name="nickname"
                />
                </label>
                <label
                    className={classes.label}
                >Watering Frequency:
                <input
                    className={classes.water}
                    onChange={handleChange}
                    value={CValue.h2oFrequency}
                    name="h2oFrequency"
                />
                </label>              
             <button onClick={handleSubmit} value="submit" className={classes.submit}>submit</button>
             <button className={classes.deletePlant} onClick={handleDelete}>delete</button>
             <button onClick={()=>{edit(false)}} className={classes.submit}>cancel</button>
            </form>
            </div> 
        </div>
    )
}

const mapActionsToProps={
    deletePlant,
    editPlant
}

export default connect(null,mapActionsToProps)(EditPlant)