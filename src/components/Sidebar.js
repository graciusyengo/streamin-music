import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlist from "./Playlist";
import {BiHeadphone} from "react-icons/bi"

export default function Sidebar() {
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
       <span className="head-phone"><BiHeadphone/></span> 
          <h1> El magni</h1>
        </div>
        <ul>
          <li >
            <MdSearch />
            <span>Recherche</span>
          </li>

          <li>
            <MdHomeFilled />
            <span> Accueil</span>
          </li>
          <li>
            <IoLibrary />
            <span>Bibliotheque</span>
          </li>

          <li>
            <IoLibrary />
            <span>titre likés</span>
          </li>
        </ul>
      </div>
      <Playlist />
    </Container>
  );
}
const Container = styled.div`
  background-color: #252526;
  color:black;
  font-size:0.8rem;
  display:flex;
  flex-direction:column;
  height:100%;
  min-width: 200px;
  
  .top_links{
    display:flex;
    flex-direction:column;
  
    .logo{
      display:flex;
      flex-direction:row;
    gap:1rem;
      align-items:center;
     margin:66px
      text-align:center;
      margin-top:1rem ;
      margin-left:1rem
     
    }
  .head-phone svg{
     height:40px;
     width:40px;
   }
   h1{
   color: #ff7800;
   }
   
   
    ul{
      list-style-type:none;
      display:flex;
      flex-direction:column;
      gap:1rem;
      padding:1rem;
     
  }
  li{
    display:flex;
    gap:1rem;
   
    cursor:pointer;
    transition:0.3s ease-in-out;
    &:hover{
      color:#ff7800;
    }
  }
`;
