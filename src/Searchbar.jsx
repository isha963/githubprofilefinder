import "./App.css";
export default function SearchBar({ handleInput,handleKeydown, handleClick , username}) {
  

  return (
    <>
      <input type="text" value={username} onChange={handleInput} onKeyDown={ handleKeydown} placeholder="search name"/> <button onClick={handleClick}>Search</button>
    </>
  );
}
