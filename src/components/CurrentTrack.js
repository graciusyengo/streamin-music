import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useStateProvider } from "../util/StateProvider";
import axios from 'axios';
import { reducerCases } from "../util/Constant"; 


export default function CurrentTrack() {
  const [{ token,currentlyPlaying},dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing ", {
        headers: {
          Authorization: "Bearer "+ token,
          "content-Type": "application/json",
        },
      });
      console.log(response)
    console.log(response.data)
    if(response.data!==""){
      const {item}=response.data
      const currentlyPlaying={
        id:item.id,
        name:item.name,
        artists:item.artists.map((artist)=>artist.name),
        image:item.album.images[2].url,

      }
      dispatch({ type:reducerCases.SET_PLAYING,currentlyPlaying})
    }
     
      
    };
    getCurrentTrack();
  }, [token, dispatch]);
 
  return (
    <Container>
      { currentlyPlaying &&(
        <div className="track">
          <div className="track_image">
            <img src= {currentlyPlaying.image} alt="currentlyPlaying" />
          </div>
          <div className="track_info">
            <h4> {currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.join(", ")}</h6>
          </div>
        </div>
      )

      
      }
      
    </Container>
  )
}
const Container= styled.div`
.track{
  display:flex;
align-item:center;
gap:rem;

h4{
  color:white;
}
h6{
  color:#b3b3b3;
}
  
 


}


`



