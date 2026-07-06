// import { useState } from "react";
import "./App.css";

export default function Profilecard({profile}) {
  // const [count, setCount] = useState(0);

  return (
    <>
      {profile?<div>
        <h3>Name:</h3>
        <h3>Username:</h3>
        <h3>Bio:</h3>
        <h3>Followers:</h3>
        <h3>Following:</h3>
        <h3>Public Repositories:</h3>
      </div>: "No Profile yet"}
      
    </>
  );


}