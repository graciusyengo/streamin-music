import React ,{useEffect}from 'react'
import Login from './components/Login'
import Streaming from './components/Streaming'
import { reducerCases } from './util/Constant'

import {useStateProvider} from "./util/StateProvider"

export default function App() {
 const [{ token },dispatch] =useStateProvider()

  useEffect(()=>{
    const hash=window.location.hash
    if(hash){
      const token = hash.substring(1).split('&')[0].split('=')[1]
      console.log(token)
      dispatch({type:reducerCases.SET_TOKEN,token})
    }

  },[token,dispatch])
  console.log(token)
  return (
    <div>
{
 
token?<Streaming/> : <Login/>
}
      
    </div>
  )
}
