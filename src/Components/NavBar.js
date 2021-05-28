import React from 'react'
import styled from 'styled-components';
import {useHistory } from 'react-router-dom'

const Nav = styled.nav`
  background: black;
  border: 0;
  width: 100%;
  color: #f3f2da;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 5;

  .links {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 50px;
  }

  .link {
    color: #f3f2da;
    font-size: 1.2rem;
    margin: 0 10px;

    &:hover {
      border-bottom: 1px solid #f3f2da;
      cursor: pointer;
    }
  }
`
   
export default function NavBar(props) {
  const{push}=useHistory()
  const{loggedIn,setLoggedIn}=props
  

  const handlePlants=()=> {  
    push("/plant-list")
  }
  const handleLogout=()=> {
    localStorage.removeItem("token")
    push("/")
    setLoggedIn(false)  
  }
  const handleLogin=()=> {
    push("/login")  
  }
  const handleAccount=()=> {
    push("/edit-user")
  }

  return (
    <Nav>
      <div className='links'>
          <div className='link' onClick={handlePlants}>Plants</div>
          {loggedIn===true ?<div className='link' onClick={handleLogout}>Logout</div>:<div className='link' onClick={handleLogin}>Login</div>}
          <div className='link' onClick={handleAccount}>Account</div>
      </div>
    </Nav>
  )
}

