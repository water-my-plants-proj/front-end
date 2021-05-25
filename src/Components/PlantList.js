import React,{useState} from 'react'
import DummyData from '../DummyData'
import PlantCard from './PlantCard'
import { makeStyles } from '@material-ui/styles';
import EditPlant from './EditPlant'
const styles = makeStyles({
plantPage:{
    display:"flex",
    flexDirection:"row",
},
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
    const[plantList,setPlantList]=useState(DummyData)
    const[edit,setEdit]= useState(false)
    const[plantToEdit,setPlantToEdit]= useState(null)

    const returnPlantId= (id)=>{
        setEdit(true)
        setPlantToEdit(plantList[id])
        return id
    }
const classes=styles()
    return (
        <div>
        <div className={classes.title}>
        <h3 className={classes.header}>Welcome to your Plant List</h3>
        </div>
        <div className={classes.plantPage}>
       
        <div className={classes.PlantList}>
            
            {plantList.map((item)=>{
                return(<h3><PlantCard plant={item} edit={returnPlantId}/> </h3>)
    })}
        </div>
        {edit===true?<EditPlant plantList={plantList} setPlantList={setPlantList} plantToEdit={plantToEdit} edit={setEdit}/>:<></>}
        </div>
        </div>
        
    )
}


