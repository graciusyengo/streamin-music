import React from 'react'
import styled from 'styled-components'
import CurrentTrack from './CurrentTrack'
import PlayerControl from './PlayerControl'

export default function Footer() {
  return (
    <Container>
    <CurrentTrack/>
    <PlayerControl/>
    </Container>
  )
}
const Container=styled.div`
background: #363636;
border-top-width: 0.2rem;
border-top-style: solid;
border-top-color: #ff7800;
height:100%;
width:100%;
display:grid;
grid-template-columns:1fr 2fr 1fr;
align-items:center;
justify-content:center;
padding:0 1rem;


`
