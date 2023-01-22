import React from "react";
import Parameter from "./Parameter";
import { getFormattedTime } from "../utils";
import styles from "./WeatherReport.module.css";

function WeatherReport({ weatherData }) {
  let { name, main = {}, sys = {}, dt, timezone } = weatherData;
  return (
    <div className={styles["report-container"]}>
      <header>
        <h3 className={styles.locationName}>{name}</h3>
        <div className={styles.current}>
          <p>Current weather</p>
          <p>{getFormattedTime(dt, timezone, sys.country)}</p>
        </div>
      </header>
      <section className={styles.temperature}>
        {main.temp && (
          <p className={styles["current-temperature"]}>
            {`${Math.round(main.temp)}°C`}
          </p>
        )}
        {main.feels_like && (
          <p className={styles["feels-like"]}>{`Feels Like ${Math.round(
            main.feels_like
          )} °C`}</p>
        )}
      </section>
      <section className={styles["parameter-container"]}>
        {main.temp_max && (
          <Parameter
            text='Maximum temperature'
            value={`${Math.round(main.temp_max)} °C`}
          />
        )}
        {main.temp_min && (
          <Parameter
            text='Minimum temperature'
            value={`${Math.round(main.temp_min)} °C`}
          />
        )}
        {main.pressure && (
          <Parameter text='Pressure' value={`${main.pressure} hPa`} />
        )}
        {main.humidity && (
          <Parameter text='Humidity' value={`${main.humidity} %`} />
        )}
        {sys.sunrise && sys.country && (
          <Parameter
            text='Sunrise'
            value={getFormattedTime(sys.sunrise, timezone, sys.country)}
          />
        )}
        {sys.sunset && sys.country && (
          <Parameter
            text='Sunset'
            value={getFormattedTime(sys.sunset, timezone, sys.country)}
          />
        )}
      </section>
    </div>
  );
}

export default WeatherReport;
