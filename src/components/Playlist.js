
import  React,{ useEffect } from "react";
import { useStateProvider } from "../util/StateProvider";
import axios from "axios";
import { reducerCases } from "../util/Constant";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Playlist() {
  const [{ token,playlists  },dispatch] = useStateProvider();
  useEffect(() => {
    const getPlayListData = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer "+ token,
          "content-Type": "application/json",
        },
      });
      const {items}=response.data
      const playlists= items.map(({name,id})=>{
        return {name,id}

      })
      dispatch({ type:reducerCases.SET_PLAYLISTS,playlists})
      console.log(playlists)
      console.log(items);
    };
    getPlayListData();
    
  }, [token, dispatch]);
 
  return(
   <Container>

    <ul>
     
       
      {
        playlists.map(({name,id})=>{
          return(
            <Link to="/TrackListPlaylist"> 
            <li className="playlist"   key={id}>{name}</li>
            </Link>
          )
        })
        
      } 
    </ul>
    
  </Container>
  )
}
const Container= styled.div`
height:100%;
overflow:hidden;
ul{
  list-style-type:none;
  display:flex;
  
  flex-direction:column;
  gap:1rem;
  padding:1rem;
  height:55vh;
  max-height:100%;
  overflow:auto;
  &::-webkit-scrollbar{
    width:0.7rem;
    &-thumb{
      background:rgba(255,255,255,0.6);
    }
  }
  
li{
display:flex;

gap:1rem;
cursor:pointer;
color:#fff;
opacity:0.;
transition:0.3s ease-in-out;
&:hover{
  color:#ff7800;
}
}


`
