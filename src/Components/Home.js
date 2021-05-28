import React from 'react'
import landingImg from '../Img/homeImg.gif'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Element = styled.div`
    background: black;
    color: #f3f2da;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f3f2da; 
    width: 30%;
    padding: 40px;
    box-shadow: 0px 0px 60px #ea97ad;;
  
    h1 {
        margin: 25px auto;
        margin-top: 5%;
        font-size: 2rem;
        text-align: center;
        border-bottom: 3px solid #f3f2da;
    }
    .gif {
        background-image: url(${landingImg});
        background-position: bottom-left;
        background-size: 55%;
        padding: 15%;
        border-radius: 50%; 
        box-shadow: 0px 0px 10px #ea97ad; 
     }

    .buttons {
        display: flex;
        justify-content: space-between;
        margin: 20px auto;

        button {
            background: #f3f2da;
            margin: 0 10px;
            border-radius: 10px;
            padding: 2px 25px;
            font-size: 1rem;
            outline: none;

            &:hover {
                background: black;
                color: #f3f2da;
                border: 2px solid #f3f2da;
            }
            &:active {
                transform: scale(.9);
                box-shadow: inset 2px 2px 5px white;
            }
        }
    }   
`

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

    return (
        <Container>
            <Element className='App' >
                <h1>WATER MY PLANTS</h1>
                <div className='gif'></div>
                <div className='buttons'>
                    <button onClick={handleSignIn}>SIGN UP</button>
                    <button onClick={handleLogIn}>LOG IN</button>    
                </div>
            </Element>
        </Container>
    )
}
