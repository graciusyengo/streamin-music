import React, { useEffect,useRef,useState } from "react";
import { useStateProvider } from "../util/StateProvider";
import styled from "styled-components";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import axios from "axios";
import { reducerCases } from "../util/Constant";

export default function Streaming() {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef=useRef()
  
  const [navBackground,setNavBackground]=useState(false)
    
  const [headerBackground,setHeaderBackground]=useState(false)
  const bodyScrolled=()=>{
      bodyRef.current.scrollTop>=30
      ?setNavBackground(true):
      setNavBackground(false)

      bodyRef.current.scrollTop>=268
      ?setHeaderBackground(true):
      setHeaderBackground(false)
  }
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "content-Type": "application/json",
        },
      });

      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      console.log(userInfo)
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo()
  }, [dispatch, token]);
  return (
    <Container>
      <div className="streaming_body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar  navBackground={navBackground}/>
          <div className="body_contents">
            <Body  headerBackground={headerBackground}/>
          </div>
        </div>
      </div>
      <div className="streaming_footer">
        <Footer />
      </div>
    </Container>
  );
}
const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .streaming_body {
    display: flex;
    align-items: stretch;
    height: 100%;
    width: 100%;
    background-color: #363636;
  }
  .body {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
`;
