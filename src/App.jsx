import { useState } from 'react'
import axios from 'axios'
import './App.css'
import SearchBar from './Searchbar';
import Profilecard from './Profilecard'

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const[error, setError] =useState("");
  
  function handleKeydown(e) {
    if (e.key === "Enter")
      handleClick();
  }


  async function handleClick() {
   if(username) {setError("");
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      
        const data = await response.data;
      
        setProfile(data);
        
      }catch (err) {
      
      setError(err.message);
      setProfile(null);
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
      <SearchBar username={username} handleInput={handleInput} handleKeydown={ handleKeydown} handleClick={handleClick} />
      <Profilecard profile={profile} loading={loading} error={error} />
    </>
  );
}

export default App
