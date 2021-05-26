import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory } from 'react-router-dom'
export default function NavBar(props) {
  const{push}=useHistory()
const{loggedIn,setLoggedIn}=props
  const useStyles = makeStyles({
    nav: {
      background: 'linear-gradient(45deg,#00cc00  10%, #008000 40%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 1px 5px 5px rgb(0,0,0)',
      width: '100%',
      color: 'white',
      height: "5%",
      minHeight: "50px",
      paddingTop: "1%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "no-wrap",
      justifyContent: "left",
      marginBottom: "5%",
      paddingBottom: "1%",
    },
    Menu: {
      color: "black",
      fontSize: "300%",
    },
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePlants=()=> {
    handleClose()
    push("/plant-list")
  }
  const handleLogout=()=> {
    push("/")
    handleClose()
    setLoggedIn(false)
    
  }
  const handleLogin=()=> {
    push("/login")
    handleClose()
    
  }
  const handleAccount=()=> {
    handleClose()
    push("/EditUser")
  }

  const standard = useStyles()
  return (
    <div className={standard.nav}>

      < MenuIcon className={standard.Menu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* MenuLinks?! */}

      
          <MenuItem onClick={handlePlants}>Plants</MenuItem>

          {loggedIn==true ?<MenuItem onClick={handleLogout}>LoginOut</MenuItem>:<MenuItem onClick={handleLogin}>LoginIn</MenuItem>}

          <MenuItem onClick={handleAccount}>Account</MenuItem>
      </Menu>
    </div>
  )
}

