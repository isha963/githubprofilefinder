import { useState } from 'react'

import './App.css'
import SearchBar from './Searchbar';
import Profilecard from './Profilecard'

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const[error, setError] =useState("");
  
  function handleClick() {
    console.log(username);
  }

  function handleInput(e){
    setUsername(e.target.value);
  }

  return (
    <>
      <h1>
        ----------- GitHub Profile Finder -----------
      </h1>
      <SearchBar username={username} handleInput={handleInput} handleClick={handleClick} />
      <Profilecard profile={profile}/>
    </>
  );
}

export default App
