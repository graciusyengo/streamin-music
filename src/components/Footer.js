import React from 'react'
import styled from 'styled-components'
import PlayerControl from './PlayerControl'
// import CurrentTrack from './CurrentTrack'
// import PlayerControl from './PlayerControl'


export default function Footer() {
  return (
    <Container>
       <PlayerControl/> 
    </Container>
  )
}
const Container=styled.div`
background: #363636;
height:100%;
width:100%;
align-items:center;
justify-content:center;


`
