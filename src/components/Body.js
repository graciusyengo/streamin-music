import React, {useEffect} from 'react'

import styled from 'styled-components'
import {AiFillClockCircle} from "react-icons/ai"
import { useStateProvider } from '../util/StateProvider'

export default function Body() {
  const   [{token},dispatch]=useStateProvider()
  useEffect(()=>{
      const getInitPlaylist=async()=>{
          
      }

  },[token,dispatch])
  return (
    <Container>
      body
    </Container>
  )
}
const Container=styled.div
``