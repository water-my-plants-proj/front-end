import React,{useState} from 'react';
import Home from './Components/Home';
import styled from 'styled-components';
//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    height: 100vh;
`

function App() {
  const[loggedIn,setLoggedIn] =useState(false)
  return (
    <Router>
      <NavBar setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Container>
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
      </Container>
    </Router>
  );
}

export default connect(null)(App)
