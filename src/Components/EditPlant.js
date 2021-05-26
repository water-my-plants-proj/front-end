import React,{useState} from 'react'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux'
const styles= makeStyles({
    container:{
        width: "50%",
        backgroundColor:"grey",
       
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
        width:"20%"
    },
    submit:{
        width:"20%",
        display: "block",
        margin: "0 auto"
    },
    label:{
        fontSize:"1.5rem"
    }
})
    function EditPlant(props) {
    const {edit,plantToEdit,setPlantList,plantList}= props
    const [CValue,setCValue]=useState(plantToEdit)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(plantList)
        const update = plantList.filter((item)=>{return item.id!==plantToEdit.id})
        setPlantList([
            CValue,...update
        ])
        edit(false);
    }
    const handleChange=(e)=>{
        e.preventDefault()
        const{name,value}=e.target
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

                <button onClick={handleSubmit} className={classes.submit}>submit</button>
                <button onClick={()=>{edit(false)}} className={classes.submit}>cancel</button>

            </form>
            </div>
        </div>
    )
}
export default connect()(EditPlant)