import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../util/StateProvider";
import axios from "axios";
import {BsFillPlayCircleFill} from "react-icons/bs"

export default function Navbar({ navBackground }) {
  const [{ token, userInfo }, dispatch] = useStateProvider();
  const [artists, setArtist] = useState([]);
  const [search, setSearch] = useState("");
 

  const getSearchArtistTrack = async () => {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        q: search,
        type: "playlist,album,track,artist",
      },
    });

    setArtist(response.data.artists.items);
    // setPlayTrack(response.data.track.items.uri);
    console.log(response.data);
    
    // console.log(response.data.track.items);
  };
  getSearchArtistTrack();
  
  
  
 
   

  const renderSearchArtist = () => {
    return artists.map((artist) => (
      <div key={artist.id} className="card-artist">
        {artist.images.length ? (
          <>
            <div className="card-image">
              <img src={artist.images[0].url} alt=""  />
              <button className="btn"><BsFillPlayCircleFill/></button>
            </div>
            <div className="card-body">{artist.name}</div>
          </>
        ) : (
          <div>pas d'info</div>
        )}
      </div>
    ));
  };

  const getInput = (e) => {
    setSearch(e.target.value);
  };
 

  return (
    <>
      <Container navBackground={navBackground}>
        <div className="search_bar">
          <FaSearch />
          <input
            type="search"
            placeholder="Artiste son et album"
            onChange={getInput}
          />
        </div>
        <div className="avatar">
          <a href="">
            <CgProfile />
            <span>{userInfo?.userName}</span>
          </a>
        </div>
      </Container>
      <div className="artist-container">
      {search ? renderSearchArtist() : null}
      </div>
    </>
  );
}

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:2rem;
height:15vh;
position:sticky;
z-index:44;
top:0;
transition: 0.3 ease-in-out;
background-color:${({ navBackground }) =>
  navBackground ? "rgba(0,0,0,0.7)" : "none"};
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
      
        span:hover{
            color:#ff7800;
            transition:0.4s ease-in-out ;
            
        }
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
`;
