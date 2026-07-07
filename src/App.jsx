import { useState } from 'react'

import './App.css'
import SearchBar from './Searchbar';
import Profilecard from './Profilecard'

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const[error, setError] =useState("");
  
  async function handleClick() {
   if(username) {setError("");
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
      
        setProfile(data);
        
      } else {
        setError("No user found");
        setProfile(null);
      
      }
    } catch (err) {
      
      setError(err.message);
    } finally {
      setLoading(false);
    }
   } else {
     
     setError("Please enter a useername");
  }

    
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
      <Profilecard profile={profile} loading={loading} error={error} />
    </>
  );
}

export default App
