import React from 'react'
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
    const {edit}= props
    const { push } = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault()
        edit(false)
        push('/plant-list')
    }
const classes=styles()
    return (
        <div className={classes.container} >
            {/* <h2>Edit Your {props.plant.species} </h2> */}
            <form className={classes.form} onSubmit={handleSubmit} >
                <labe className={classes.label}> Species:
                <input className={classes.species}/>
                </labe>
                <label className={classes.label}> Nickname:
                <input className={classes.nickname}/>
                </label>
                <label className={classes.label}> Watering Frequency:
                <input className={classes.water}/>
                </label>
                <button className={classes.submit}>submit</button>
            </form>
        </div>
    )
}
