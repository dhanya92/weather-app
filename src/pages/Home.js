import { useEffect, useRef, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import WeatherReport from "../components/WeatherReport";
import Input from "../components/Input";
import Button from "../components/Button";
import ShareWeather from "../components/ShareWeather";
import Loading from "../components/Loading";
import useHttp from "../hooks/useHttp";
import styles from "../components/Input.module.css";
import classes from "./Home.module.css";
import { API_KEY } from "../constants";

function Home() {
  const [location, setLocation] = useState("");
  const [locationTouched, setLocationTouched] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const handleError = useErrorHandler();
  const { isLoading, sendReq } = useHttp();
  const inputRef = useRef(null);

  const enteredLocationIsValid = location.trim() !== "";
  const locationInputIsInvalid =
    !enteredLocationIsValid &&
    locationTouched &&
    Object.keys(weatherData).length === 0;

  let formIsValid = false;
  if (enteredLocationIsValid) {
    formIsValid = true;
  }

  const fetchWeather = async () => {
    function getGeoLocation(geoData) {
      if (!geoData || geoData.length === 0) {
        handleError({
          message:
            "Please enter a valid location. Unable to fetch latitude and longitude.",
        });
        return;
      }
      const { lat, lon } = geoData[0];
      sendReq(
        {
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
        },
        (locationData) => setWeatherData(locationData)
      );
    }
    sendReq(
      {
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`,
      },
      getGeoLocation
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLocationTouched(true);
    if (!enteredLocationIsValid) {
      return;
    }
    fetchWeather();
    setLocation("");
    setLocationTouched(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <form onSubmit={onSubmit} className={classes["search-container"]}>
        <Input
          ref={inputRef}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setWeatherData({});
          }}
          onBlur={(e) => setLocationTouched(true)}
          inputStyle={styles.search}
          type='text'
        />
        <Button
          btnText='Search'
          onBtnClick={onSubmit}
          isDisabled={!formIsValid}
        />
      </form>
      {locationInputIsInvalid && (
        <p className={classes["error-text"]}>Location must not be empty.</p>
      )}
      {!isLoading && Object.keys(weatherData).length > 0 && (
        <>
          <WeatherReport weatherData={weatherData} />
          <ShareWeather />
        </>
      )}
    </>
  );
}

export default Home;
