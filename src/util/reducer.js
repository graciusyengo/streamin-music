
import { reducerCases } from "./Constant"

export const initialState  ={
    token:window.localStorage.getItem('token'),
    playlists:[],
    userInfo:null,
    selectedPlayListId:"7tqiNqaXI5fdJdf5cgGpjF",
    selectedPlaylist:null,
    currentlyPlaying:null,
    playerState:false,

   // playerTrack:false,

}
const reducer=(state,action)=>{
    switch(action.type){
        case reducerCases.SET_TOKEN:{
            return {
                ...state,
                token: action.token,
                // token: action.token,
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return{
                ...state,playlists:action.playlists,
            }
        }

        case reducerCases.SET_USER:{
            return{
                ...state,userInfo:action.userInfo,
            }
        }
        case reducerCases.SET_PLAYLIST:{
            return{
                ...state,selectedPlaylist:action.selectedPlaylist,
            }
        }
        case reducerCases.SET_PLAYING:{
            return{
                ...state,currentlyPlaying:action.currentlyPlaying,
            }
        }
        case reducerCases.SET_PLAYER_STATE:{
            return{
                ...state,playerState:action.playerState,
            }
        }
       

        default: return state

    }
  
}
export default reducer