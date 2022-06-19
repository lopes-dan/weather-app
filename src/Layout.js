import { useState, useEffect } from "react";
import { calculateTemp } from "./utils";
import { countries } from "country-data";
import CurrentWeather from "./CurrentWeather";

const Layout = ({ location }) => {
  const defaultDay = location.weather[0];
  const [currentDay, setCurrentDay] = useState(defaultDay);

  useEffect(() => {
    setCurrentDay(defaultDay);
  }, [location]);

  const updateDay = (id) => {
    location.weather.map((item) => {
      if (id === item.day) {
        setCurrentDay(item);
      }
    });
  };
  return (
    <div>
      <div>
        <h1>
          {" "}
          {location.city.name}, {countries[location.city.country].name}
        </h1>
        <CurrentWeather currentDay={currentDay} />
        <div className="grid-days">
          {location.weather
            .filter(
              (item) => item.rows.length > 0 && currentDay.day !== item.day
            )
            .map((filteredItem) => (
              <div
                onClick={() => updateDay(filteredItem.day)}
                className="day-details"
                key={filteredItem.day}
              >
                <p> {filteredItem.day}</p>
                <span> max:{calculateTemp("max", filteredItem)}°C</span>
                <span> min:{calculateTemp("min", filteredItem)}°C</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
