import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'

export default function Streaming() {
  return (
    <Container>
        <div className="streaming_body">
            <Sidebar/>
            <div className='body'>
                <Navbar/>
                <div className="body_contents">
                <Body/>
                </div>
            </div>

        </div>
        <div className="streaming_footer">
            <Footer/>
        </div>
      
    </Container>
  )
}
const Container=styled.div`
max-width:100vw;
max-height:100vw;

overflow:hidden;
display:grid;
grid-template-rows: 85vh 15vh;
.streaming_body{
    display:grid;
    grid-template-columns: 18vw 85vw;
    height:100%;
    width:100%;
    background-color:#363636;
}
.body{
    height:100%;
    width:100%;
    overflow:auto;
    
    


}
`
