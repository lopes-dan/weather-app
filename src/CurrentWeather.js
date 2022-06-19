const CurrentWeather = ({ currentDay }) => {
    return (
      <div className="current-weather">
        <div className="temp-container">
          <h1> {currentDay.day} </h1>
          <h2>{Math.round(currentDay.rows[0].forecast.main.temp)}°C</h2>
          <div className="sub-temps-container">
            {currentDay.rows.map((item) => (
              <p className="hourly-temp" key={Math.random(100 * 10)}>
                {" "}
                At{" "}
                {new Date(item.forecast.dt_txt).toLocaleString("en-US", {
                  hour: "numeric",
                  hour12: true
                })}
                : {Math.round(item.forecast.main.temp)}°C
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CurrentWeather;
  