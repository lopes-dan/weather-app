import "./index.css";
import { useState } from "react";
import Search from "./Search";
import Layout from "./Layout";

export default function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const locationHandler = (weather, city) => {
    setLocation({ weather: weather, city: city });
  };
  const erroHandler = (msg) => {
    setError(msg);
  };

  return (
    <div className="App">
      <Search
        onError={erroHandler}
        location={location}
        setIsPending={setIsPending}
        setLocation={setLocation}
        onSubmit={locationHandler}
      />
      {isPending && <div className="error"> Fetching forecasts... </div>}
      {error && <div className="error"> {error} </div>}

      {location && <Layout location={location} />}
    </div>
  );
}
