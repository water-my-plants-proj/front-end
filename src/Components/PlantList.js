import React,{useState,useEffect} from 'react'
import PlantCard from './PlantCard'
import { makeStyles } from '@material-ui/styles';
import EditPlant from './EditPlant';
import {connect} from 'react-redux'
import {fetchPlants} from '../Actions/Index';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
const styles = makeStyles({
plantPage:{
    display:"flex",
    flexDirection:"row",
},
PlantList:{
    width:"100%",
    backgroundColor:"grey"
},
title:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:"-4%",
    background:"green",
    paddingTop:"3%",
    paddingBottom:"3%"
},
button:{
    border:"10px solid black"
},


})
function PlantList(props) {
    const{data}=props
    const {push}=useHistory()
    const {fetchPlants,fetching}= props
    useEffect(() => {
        fetchPlants("/plants/plants")
    },[])
    const [ edit, setEdit ] = useState(false)
    const [ plantToEdit, setPlantToEdit ] = useState(null)
    const handleAdd=(e)=>{
        e.preventDefault()
        push("/add-plant")
    }

    const returnPlantId = (id)=>{
        setEdit(true)
      const EditClick =  data.filter((item)=>{
          console.log(item)
          console.log(item)
            return item.plant_id==id
        })
        setPlantToEdit(...EditClick)
        return id
    }

const classes=styles()

    return (
        <div>
        <div className={classes.title}>

        <h3 className={classes.header}>Welcome to your Plant List</h3>
        <button className={classes.button} onClick={handleAdd}>Add Plant</button>
        </div>
        <div className={classes.plantPage}>
       
        <div className={classes.PlantList}>
            
            {data.map((item)=>{
                return(<h3><PlantCard key ={item.id} plant={item} returnPlantId={returnPlantId}/> </h3>)
    })}
        </div>
        {edit===true?<EditPlant plantList={data} plantToEdit={plantToEdit} edit={setEdit}/>:<></>}
        </div>
        </div>
        
    )
}

const mapStateToProps=(state)=>{
return{
    data:state.plantList,
    fetching:state.isFetching
}
}
const mapActionsToProps={
fetchPlants,
}

export default connect(mapStateToProps,mapActionsToProps)(PlantList)


