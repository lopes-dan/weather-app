import { useState } from "react";
import { dayConverter } from "./utils";

const Search = ({ onSubmit, setLocation, setIsPending, onError }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    setIsPending(true);
    setLocation(null);
    onError(null);
    e.preventDefault();
    setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=fafe1a7c266c283f7b12c6a3aba2ca0f&units=metric&cnt=40`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("No city found");
          }
          return res.json();
        })
        .then((data) => {
          onSubmit(dayConverter(data), data.city);
          onError(null);
          setIsPending(false);
        })
        .catch((err) => {
          onError(err.message);
          setLocation(null);
          setIsPending(false);
        });
      setSearch("");
    }, 200);
  };

  return (
    <div className="search-container">
      <h1> Weather App </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Enter a location, please"
          value={search}
        />
        <button className="searchLocation"> Search </button>
      </form>
      <div></div>
    </div>
  );
};

export default Search;
