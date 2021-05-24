import React from 'react'
import landingImg from '../Img/homeImg.gif'
import { makeStyles } from '@material-ui/styles'
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        border: "10px solid green",
        borderRadius: "20%",
        width: "50%"
    },
    header: {
        margin: "0 auto",
        marginTop: "5%",
        fontSize: "2vw"
    },
    img: {
        backgroundImage: `url(${landingImg})`,
        padding: "30%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "10%",
        height: "10%",
        borderRadius: "20%"
    },
    signUp: {
        width: "20%",
        margin: "0 auto",
        backgroundColor: "green",
        marginBottom: "5%",
        borderRadius: "10%",
    },
    logIn: {
        width: "20%",
        margin: "0 auto",
        backgroundColor: "green",
        marginBottom: "5%",
        borderRadius: "10%",
    }
})


export default function Home() {
    const {push}=useHistory()
    const handleSignIn = (e) => {
        e.preventDefault();
        push("/signUp")
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        push("/login")
    }
    const classes = useStyles();

    return (
        <div className="App">
        <div className={classes.container}>
            <h1 className={classes.header}>WELCOME TO WATER MY PLANTS!!</h1>
            <div className={classes.img} ></div>
            <button onClick={handleSignIn} className={classes.signUp}>SIGN UP</button>
            <button onClick={handleLogIn} className={classes.logIn}>lOG IN</button>
        </div>
        </div>
    )
}
