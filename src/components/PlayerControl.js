import React,{useContext } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback/lib'
import { useStateProvider } from "../util/StateProvider";
import { MyContext } from './MyContext';

function PlayerControl() {
  const [{ token }, dispatch] = useStateProvider();
  
  
 
   const {uri,setUri}=useContext(MyContext)
 console.log("shilo",token);
  console.log('gracius',uri);

  return(
  <div>
    <SpotifyPlayer
  token={token}
  uris={uri}

  styles = { { 
    activeColor : '#fff' , 
    bgColor : '#333' , 
    color : '#fff' , 
    loaderColor : '#fff' , 
    sliderColor : '#1cb954' , 
    trackArtistColor : '# ccc' , 
    trackNameColor : '#fff' , 
  } } 
/>
  </div>
  
  )

  
 
}

export default PlayerControl

// import React from 'react'
// import styled from 'styled-components'
// import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle,} from "react-icons/bs"
// import {CgPlayTrackNext,CgPlayTrackPrev} from "react-icons/cg"
// import  {FiRepeat} from "react-icons/fi"
// import { useStateProvider } from '../util/StateProvider'
// import axios from 'axios'
// import { reducerCases } from "../util/Constant";


// export default function PlayerControl() {
//     const [{ token,playerState  },dispatch] = useStateProvider();
//     const changeTrack=async(type)=>{
//      await axios.post(`https://api.spotify.com/v1/me/player/${type}`, 
//      {},{
//         headers: {
//           Authorization: "Bearer "+ token,
//           "content-Type": "application/json",
//         },
//       }
//       );
//       const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing ", {
//         headers: {
//           Authorization: "Bearer "+ token,
//           "content-Type": "application/json",
//         },
//       });
//       console.log(response)
//     console.log(response.data)
//     if(response.data!==""){
//       const {item}=response.data
//       const currentlyPlaying={
//         id:item.id,
//         name:item.name,
//         artists:item.artists.map((artist)=>artist.name),
//         image:item.album.images[2].url,
//       }
//      dispatch({ type:reducerCases.SET_PLAYING,currentlyPlaying
//   })
//     }else
//      dispatch({ type:reducerCases.SET_PLAYING,currentlyPlaying:null})
//     }
//   return (
//     <Container>
//       <div className="shuffle">
//      <BsShuffle/>
//           </div>
//       <div className="previous">
//       <CgPlayTrackPrev  onClick={()=>changeTrack("previous")}/>
//           </div>
//           <div className="state">
//               {playerState ? <BsFillPauseCircleFill/> : <BsFillPlayCircleFill/>}
//           </div>
//           <div className="next">
//               <CgPlayTrackNext onClick={()=>changeTrack("next")}/>
//           </div>
//           <div className="repeat">
//               <FiRepeat/>
//           </div>
//     </Container>
//   )
// }
// const Container= styled.div`
// display:flex;
// align-items:center;
// justify-content:center;
// gap:2rem;
// svg{ 
// color:#3b3b3;

// transition:0.2 ease-in-out;
// &:hover{
//     color:white;
// }

// }
// .state{
//     svg{
//         color:white;
//     }
// }
// .previous,.next, .state{
//     font-size:2rem;

// }


// `
