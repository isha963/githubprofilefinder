// import { useState } from "react";
import "./App.css";

export default function Profilecard({profile,error, loading}) {
  // const [count, setCount] = useState(0);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : error ? (
        error
      ) : profile ? (
        <div>
          <img src={profile.avatar_url} alt={profile.login} width={150} />
          <h3>
            Name: <a href={profile.html_url} >{profile.name}</a>{" "}
          </h3>
          <h3>Username: {profile.login}</h3>
          <h3>Bio:{profile.bio ? profile.bio : " No bio available"}</h3>
          <h3>Followers: {profile.followers}</h3>
          <h3>Following: {profile.following}</h3>
          <h3>Public Repositories: {profile.public_repos}</h3>
        </div>
      ) : (
        "No Profile yet"
      )}
      {}
    </>
  );


}