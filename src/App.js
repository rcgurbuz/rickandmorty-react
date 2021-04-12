import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import CharacterGrid from "./components/CharacterGrid";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character?name=${search}`
      );

      setItems(result.data.results);

      setIsLoading(false);
    };

    fetchItems();
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Search getSearch={(e) => setSearch(e)} />
      {items && <CharacterGrid isLoading={isLoading} items={items} />}
    </div>
  );
}

export default App;
