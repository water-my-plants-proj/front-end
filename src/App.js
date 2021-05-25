import React from 'react';
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

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/edit-plant'>
          <EditPlant />
        </Route>
        <Route path='/plant-list'>
          <PlantList />
        </Route>
        <Route path='/add-plant'>
          <AddPlant />
        </Route>
        <Route path='/edit-user'>
          <EditUser />
        </Route>
        <Route path="/login">
          <Login />
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

export default App;
