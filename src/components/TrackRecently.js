import React, { useContext, useEffect, useState } from "react";
import { useStateProvider } from "../util/StateProvider";
import { BsFillPlayCircleFill } from "react-icons/bs";

import axios from "axios";

import { MyContext } from "./MyContext";
// import { reducerCases } from "../util/Constant";
import "../index.css";

function TrackRecently() {
  const [{ token }, dispatch] = useStateProvider();
  const { uri, setUri } = useContext(MyContext);
  const [trackRecently, setTrackRecently] = useState([]);

  useEffect(() => {
    const getTrackRecently = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/recently-played",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setTrackRecently(response.data.items);
      // setPlayTrack(response.data.track.items.uri);
      // console.log(response.data);
    };
    getTrackRecently();
  }, [token]);
  console.log(trackRecently);

  return trackRecently.map((trackRecentlys) => (
    <div className="card-artist">
      <>
        <div className="card-image">
          <img src={trackRecentlys.track.album.images[1].url} />
          <button className="btn" onClick={()=>setUri(trackRecentlys.track.uri)}>
            <BsFillPlayCircleFill />
          </button>
        </div>
        <div className="card-body">{trackRecentlys.track.name}</div>
      </>
    </div>
  ));
}
export default TrackRecently;
