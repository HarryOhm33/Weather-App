import { useState } from "react";

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState();

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#1976d2" }}>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      {weatherInfo && <InfoBox info={weatherInfo} />}
      <div className="footer">
        Git Repo:-{" "}
        <a href="https://github.com/HarryOhm33/Weather-App.git" target="_blank">
          Click Here!
        </a>{" "}
        &nbsp;|&nbsp; LinkedIn:-{" "}
        <a
          href="https://www.linkedin.com/posts/harryohm33_react-webdevelopment-deltabatch-activity-7208193498255089664-7MoB?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          Click Here!
        </a>
      </div>
    </div>
  );
}
