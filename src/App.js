import React, { useState } from "react";
import "./App.css";
import BusinessList from "./Components/BusinessList/BusinessList";
import SearchBar from "./Components/SearchBar/SearchBar";
import Yelp from "./Components/util/Yelp";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) => {
      setBusinesses(businesses);
    });
  };

  return (
    <div className='App'>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
