import React,{useState} from 'react';
import Home from './Components/Home';
//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
//Components
import AddPlant from './Components/AddPlant'
import EditUser from './Components/EditUser';
import EditPlant from './Components/EditPlant';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import PlantList from './Components/PlantList';
import SignUp from './Components/SignUp';
import { connect } from 'react-redux';

function App(props) {
  const{data}=props
  const[loggedIn,setLoggedIn] =useState(false)
  const[plants,setPlants] =useState(data)
  return (
    <Router>
      <NavBar setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Switch>
        <Route path='/edit-plant'>
          <EditPlant />
        </Route>
        <Route path='/plant-list'>
          <PlantList/>
        </Route>
        <Route path='/add-plant'>
          <AddPlant />
        </Route>
        <Route path='/edit-user'>
          <EditUser />
        </Route>
        <Route path="/login">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/signUp">
          <SignUp/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
const mapStateToProps=(state)=>{
  return{
    data:state.plantList
  }
}
export default connect(mapStateToProps,null)(App)
