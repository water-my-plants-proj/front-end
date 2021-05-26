import React,{useState,useEffect} from 'react'
import DummyData from '../DummyData'
import PlantCard from './PlantCard'
import { makeStyles } from '@material-ui/styles';
import EditPlant from './EditPlant';
import {connect} from 'react-redux'
import {fetchPlants} from '../Actions/Index';
import axiosWithAuth from '../Utils/AxiosWithAuth';
import {useHistory} from 'react-router-dom';

const styles = makeStyles({
plantPage:{
    display:"flex",
    flexDirection:"row",
},
PlantList:{
    width:"100%",
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
function PlantList(props) {
    const {push}=useHistory()
    const {fetchPlants}= props
    useEffect(() => {
        fetchPlants("/plants/plants")
    },[])

    const [plantList, setPlantList ] = useState(DummyData)
    const [ edit, setEdit ] = useState(false)
    const [ plantToEdit, setPlantToEdit ] = useState(null)
    const handleAdd=(e)=>{
        e.preventDefault()
        push("/add-plant")
    }

    const returnPlantId = (id)=>{
        setEdit(true)
        setPlantToEdit(plantList[id])
        return id
    }

const classes=styles()

    return (
        <div>
        <div className={classes.title}>
        <h3 className={classes.header}>Welcome to your Plant List</h3>
        <button onClick={handleAdd}>Add Plant</button>
        </div>
        <div className={classes.plantPage}>
       
        <div className={classes.PlantList}>
            
            {plantList.map((item)=>{
                return(<h3><PlantCard key ={item.id} plant={item} edit={returnPlantId}/> </h3>)
    })}
        </div>
        {edit===true?<EditPlant plantList={plantList} setPlantList={setPlantList} plantToEdit={plantToEdit} edit={setEdit}/>:<></>}
        </div>
        </div>
        
    )
}

const mapStateToProps=()=>{

}
const mapActionsToProps={
fetchPlants,
}

export default connect(mapStateToProps,mapActionsToProps)(PlantList)


