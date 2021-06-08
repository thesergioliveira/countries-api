import React, { useState, useEffect, Fragment} from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Country from "./components/Country";

function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  }, []);

  function handleChange(e){
    setUserInput(e.target.value);
    console.log(userInput);

  }

  function handleSubmit(e){
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);
    console.log(textToUrl);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;
    console.log(endPoint);
    axios(endPoint)
    .then(({data})=> setResults(data))
    .catch((err)=> console.log(`There was an error: ${err}`));
    console.log(results);
  }
 
  if (loading) return <Loading/>
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text"
          // value={userInput}
          onChange={handleChange}
          placeholder="Write a country name"
        ></input>
        <button type="submit">Search</button>
      </form>
      <Country results={results}/>
    </Fragment>
  );
}

export default App;
