import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlist from "./Playlist";

export default function Sidebar() {
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
      
          <h1> El magni</h1>
        </div>
        <ul>
          <li className="search">
            <MdSearch />
            <span>Recherche</span>
          </li>

          <li>
           
            <div className="container-li">
            <MdHomeFilled />
              <span> Accueil</span>
            </div>
          </li>
          <li>
         
            <div className="container-li">
            <IoLibrary />
              <span>Bibliotheque</span>
            </div>
          </li>
        
       <li>
         
         <div className="container-li">
         <IoLibrary />
           <span>titre likés</span>
         </div>
       </li>
        
        </ul>
        <Playlist/>
      </div>
      
    </Container>
  );
}
const Container = styled.div`
  background-color: #252526;
  color:#black;
  font-size:0.8rem;
  display:flex;
  flex-direction:column;
  height:100%;
  width:100%;
  .top_links{
    display:flex;
    flex-direction:column;
    .logo{
      text-align:center;
      margin:1rem 0;
      height:100%;
    }
    h1{
    color: #ADFF00;
    }
    .search{
      display:flex;
      margin-left:23px;
      color:#6B7280;
     

    }
    .container-li{
      
      width:70%;
      display:flex;
      
      gap:1rem;
      align-item:center;
      background-color:#FFF9F4;
      margin-right:25px;
      text-align:center;
      border-radius:8px;
      padding: 0.6rem 0.2rem;
    }
    span{
      margin-right:25px;
      width:199px;
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
      color:green;
    }
  }
`;
