import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Streaming from "./components/Streaming";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TrackListPlaylist from "./components/TrackListPlaylist";
import Recherche from "./components/Recherche";
import { reducerCases } from "./util/Constant";

import { useStateProvider } from "./util/StateProvider";
import { MyContext } from "./components/MyContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  const [uri, setUri] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  console.log(token);
  return (
    <div>
      <MyContext.Provider value={{ uri, setUri }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Streaming" element={<Streaming />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/TrackListPlaylist" element={<TrackListPlaylist />} />
            <Route path="/Recherche" element={<Recherche />} />
          </Routes>
        </BrowserRouter>
        <div className="streaming_footer">
          {
            token &&
            <Footer />
          }
        </div>
      </MyContext.Provider>
    </div>
  );
}
