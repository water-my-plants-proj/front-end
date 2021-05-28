import React,{useState} from 'react';
import Home from './Components/Home';
import styled from 'styled-components';
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
import background from './Img/plant-bg.jpeg'

const Container = styled.div`
    background-image: url(${ background });
    background-size: cover;
    backgorund-position: bottom;
    height: 160vh;,
`

function App() {
  const[loggedIn,setLoggedIn] =useState(false)
  return (
    <Router>
      <NavBar setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Container>
        <Switch>
          <PrivateRoute path='/edit-plant' component={EditPlant} />
          <PrivateRoute path='/plant-list' component={PlantList} />  
          <PrivateRoute path='/add-plant' component={AddPlant} />
          <PrivateRoute path='/edit-user' component={EditUser} /> 
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
      </Container>
    </Router>
  );
}

export default connect(null)(App)
