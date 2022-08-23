import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback/lib'

function PlayerControl() {
  return (
    <div>
      <SpotifyPlayer
        token="BQAZv4iwBo_WfY-Qwr_r03SkR2eTnb5O6B2lo5C7r7upgwFoPIM7FOqicy_kvUMdWrayxPumz8lm6tu558XNguw2dU-gsW4M0dwd_X_xkxeel7GhAsQyx7urDTMeBA3o0zZ0zqEc5TiBaPL31r7RVoSK_AU8r7TbYPBgKK5zHERp-8CRUeGsQjNW6MGl7B4TQHUmBErAkE42rz7SyQsET146mqy0aTnIqGeQUeInX7t9ZrmNsrHFiIj0EJIHQU1SHP-vDByM9yfOs49U2odZV_USmxEpCxG08DfokCQTOTXmX9Jyk1N6DJvdJxMlm32kzC9dUg"
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      />;
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
