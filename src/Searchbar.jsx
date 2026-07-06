import "./App.css";
export default function SearchBar({ handleInput, handleClick , username}) {
  

  return (
    <>
      <input type="text" value={username}alue onChange={handleInput} placeholder="search name"/> <button onClick={handleClick}>Search</button>
    </>
  );
}
