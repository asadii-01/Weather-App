import { useState } from "react";
import WeatherInfo from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [info, setInfo] = useState({
    city: "Lahore",
    feelsLike: 24.5,
    temp: 34.0,
    tempMin: 32.0,
    tempMax: 36.0,
    humidity: 57,
    weather: "scattered clouds",
  });

  let updateInfo = (result) => {
    setInfo(result);
  };

  return (
    <div className="weather-app">
      <SearchBox updateInfo={setInfo}/>
      <WeatherInfo info={info} />
    </div>
  );
}
