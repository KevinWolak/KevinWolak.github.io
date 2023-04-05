import { useState } from "react";
import "../App.css";
import nerdImage from "../img/nerdcutout.png";
import clouds from "../img/clouds.png";
import clear from "../img/clear.png";
import snow from "../img/snow.png";
import drizzle from "../img/drizzle.png";
import rain from "../img/rain.png";
import mist from "../img/mist.png";
import { useQuery } from "@tanstack/react-query";
import fetchWeather from "../hooks/fetchWeather";
import { useParams } from "react-router-dom";
import "./Home.css";
import Modal from "../Modal/modal";

const Discription = () => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const results = useQuery(["details", id], fetchWeather, {
    enabled: false,
  });

  const displayWeatherImg = (data) => {
    if (data.weather[0].description.includes("rain")) {
      return <img src={rain} alt="rain" />;
    } else if (data.weather[0].description.includes("clouds")) {
      return <img src={clouds} alt="clouds" />;
    } else if (data.weather[0].description.includes("sunny")) {
      return <img src={clouds} alt="sunny" />;
    } else if (data.weather[0].description.includes("clear")) {
      return <img src={clear} alt="clear" />;
    } else if (data.weather[0].description.includes("snow")) {
      return <img src={snow} alt="snow" />;
    } else if (data.weather[0].description.includes("drizzle")) {
      return <img src={drizzle} alt="drizzle" />;
    } else if (data.weather[0].description.includes("mist")) {
      return <img src={mist} alt="mist" />;
    }
  };

  const weather = results.data?.weather[0];
  const city = results.data?.name;
  const temp = parseInt(results.data?.main.temp);

  const showWeatherHandler = () => {
    setShowModal(true);
    results.refetch();
  };

  return (
    <div className="App">
      <div className="content">
        <section className="intro">
          <p className="name">
            Hi, my name is <span>Kevin Wolak</span>
          </p>
          <h2>I develop front and back end websites.</h2>
          <img src={nerdImage} alt="nerdImage" />
          <p>
            I'm a developer that recently graduated from Fanshawe College. I
            specialize in React.js and Express.js.
          </p>

          <p>Currently, I'm working on building a Tutoring Website.</p>
          <button className="button" onClick={showWeatherHandler}>
            Weather Report
          </button>
          {showModal && (
            <Modal>
              {results.isLoading ? (
                <div className="loading-pane">
                  <h2 className="loader">🌀</h2>
                </div>
              ) : (
                <div>
                  <h1>Weather Report</h1>
                  <div className="buttons">
                    <h2>Forecast: {weather?.main}</h2>
                    <h2>City: {city} </h2>
                    <div id="weatherImg">{displayWeatherImg(results.data)}</div>
                    <h3 className="temp">{temp}ºC </h3>
                    <button
                      className="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Modal>
          )}
        </section>
      </div>
    </div>
  );
};

export default Discription;
