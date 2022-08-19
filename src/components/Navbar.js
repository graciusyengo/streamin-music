import React from 'react'
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import { useStateProvider } from '../util/StateProvider'

export default function Navbar() {
    const [{ userInfo }] = useStateProvider();
 
    
  return (
    <Container>
    <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder='Artiste son et album' />
    </div>
    <div className="avatar">
       
        <a href="">
        <CgProfile/>
        <span>{userInfo?.userName}</span>

        </a>
    </div>


    </Container>
  )
}

const Container=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:2rem;
height:15vh;
position:sticky;
top:0;
transition: 0.3 ease-in-out;
background-color:none;
.search_bar{
    background-color:white;
    width:30%;
    padding:0.4rem 1rem;
    border-radius:2rem;
    display:flex;
    align-items:center;
    gap:0.6rem;
    transition:0.4s ease-in-out;
}
.search_bar:hover{
    background-color:white;
    border-width: 0.2rem;
    border-style: solid;
    border-color: #ff7800;
    
}
    input{
        border:none;
        
        height:2rem;
        width:100%;
        transition:0.9s ease-in-out;
    
            outline:none;
        
    }
    .avatar{
        background-color:black;
       padding:0.3rem 0.5rem;
       border-radius:2rem;
       justify-content:center;
       align-items:center;
    }
    a{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:0.5rem;
        text-decoration:none;
        color:white;
        font-weight:bold;
        svg{
            font-size:1.4rem;
            background-color:#282828;
            transition:0.3s ease-in-out;
        }
        svg:hover{
            font-size:1.4rem;
            background-color:#ff7800;
            border-radius:1rem;
        }
    }

}
`
