import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    let redirectUrl = process.env.REACT_APP_REDIRECT_URL;
    const apiUrl = process.env.REACT_APP_API_URL;

    if (process.env.NODE_ENV === 'production') {

      redirectUrl = process.env.REACT_APP_REDIRECT_URL_PROD
      
    }
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container className="container">
      <h1> el magni Music</h1>
      <button onClick={handleClick}>connecte toi</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 56px;
  }
`;
