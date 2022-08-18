import React, { useEffect } from "react";
import { useStateProvider } from "../util/StateProvider";
import axios from "axios";
import { reducerCases } from "../util/Constant";

export default function Playlist() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlayListData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      console.log(playlists);
      console.log(items);
    };
    getPlayListData();
  }, [token, dispatch]);

  return (
    <div>
      <ul>
        {playlists.map(({ name, id }) => {
          return(
            <li key={id}>{name}</li>
          )
         
        })}
      </ul>
    </div>
  );
}
