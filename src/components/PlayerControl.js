import React, { useContext } from "react";
import SpotifyPlayer from "react-spotify-web-playback/lib";
import { useStateProvider } from "../util/StateProvider";
import { MyContext } from "./MyContext";

function PlayerControl() {
  const [{ token }, dispatch] = useStateProvider();

  const { uri } = useContext(MyContext);
  console.log("shilo", token);
  console.log("gracius", uri);

  return (
    <div>
      <SpotifyPlayer
        token={token}
        uris={uri}
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
    </div>
  );
}

export default PlayerControl;

