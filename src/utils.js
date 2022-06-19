export function dayConverter(forecasts) {
  let holderArray = [];
  // dynamically populate holderArray with data returned from forecast api
  // iterate each row, and add the default row for each day of the week returned from the api
  forecasts.list.forEach((item) => {
    let dayName = new Date(item.dt_txt).toLocaleString("en-us", {
      weekday: "long"
    });
    // if day is not in holderArray, then add it
    if (
      holderArray.filter((obj) => {
        return obj.day === dayName;
      }).length === 0
    ) {
      holderArray.push({ day: dayName, rows: [] });
    }
    // add forecast item to rows[]
    holderArray
      .filter((obj) => {
        return obj.day === dayName;
      })[0]
      .rows.push({ forecast: item });
  });

  ///console.log(holderArray);
  return holderArray.filter((item) => {
    return item.rows.length > 0;
  });
}
/*function dayStr(dayIndex) {
  return (
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ][dayIndex] || ""
  );
}
*/
export const calculateTemp = (type, arr) => {
  let filterArr = arr.rows.map((item) => {
    return item.forecast.main.temp;
  });
  if (type === "max") {
    return Math.round(Math.max(...filterArr));
  }
  if (type === "min") {
    return Math.round(Math.min(...filterArr));
  }
};
