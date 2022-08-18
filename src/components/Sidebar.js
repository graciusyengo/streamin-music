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
      text-align:center;
      margin:1rem 0;
     
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
