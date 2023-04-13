import { useState, useEffect } from "react";
import "../App.css";
import nerdImage from "../img/nerdcutout.png";
import clouds from "../img/clouds.png";
import clear from "../img/clear.png";
import snow from "../img/snow.png";
import drizzle from "../img/drizzle.png";
import rain from "../img/rain.png";
import mist from "../img/mist.png";
import windImg from "../img/wind.png";
import humidityImg from "../img/humidity.png";
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

  useEffect(() => {
    const closeModal = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      window.addEventListener("keydown", closeModal);
    }

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  }, [showModal]);

  const displayWeatherImg = (data) => {
    if (data.weather[0].description.includes("rain")) {
      return <img className="weatherImage" src={rain} alt="rain" />;
    } else if (data.weather[0].description.includes("clouds")) {
      return <img className="weatherImage" src={clouds} alt="clouds" />;
    } else if (data.weather[0].description.includes("sunny")) {
      return <img className="weatherImage" src={clear} alt="sunny" />;
    } else if (data.weather[0].description.includes("clear")) {
      return <img className="weatherImage" src={clear} alt="clear" />;
    } else if (data.weather[0].description.includes("snow")) {
      return <img className="weatherImage" src={snow} alt="snow" />;
    } else if (data.weather[0].description.includes("drizzle")) {
      return <img className="weatherImage" src={drizzle} alt="drizzle" />;
    } else if (data.weather[0].description.includes("mist")) {
      return <img className="weatherImage" src={mist} alt="mist" />;
    }
  };

  const humidity = results.data?.main.humidity;
  const wind = parseInt(results.data?.wind.speed);
  const city = results.data?.name;
  const temp = parseInt(results.data?.main.temp);
  console.log(humidity);
  console.log(wind);

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
          <h2 className="devlopTag">I develop front and back-end websites.</h2>
          <img src={nerdImage} alt="nerdImage" />
          <p>
            I'm a developer that recently graduated from Fanshawe College. I
            specialize in React.js and Express.js.
          </p>
          {/* 
          <p>Currently, I'm working on building a Tutoring Website.</p> */}
          <p>
            Currently, I am focus on building a Tutoring Website utilizing the
            latest web development standards and practices.
          </p>
          <button className="button " onClick={showWeatherHandler}>
            Weather Report
          </button>
          {showModal && (
            <Modal>
              <div
                className="modal"
                onClick={(event) => event.stopPropagation()}
              ></div>
              {results.isLoading ? (
                <div className="loading-pane">
                  <h2 className="loader">🌀</h2>
                </div>
              ) : (
                <div className="weatherContainery">
                  <div className="buttons">
                    <div id="weatherImg">{displayWeatherImg(results.data)}</div>
                    <div className="weather-details">
                      <div class="weather-details-row">
                        <h3>
                          <img src={humidityImg} />
                          Humidity:
                          {humidity}
                        </h3>
                        <h3>
                          <img src={windImg} />
                          Wind:
                          {wind} km
                        </h3>
                      </div>
                    </div>
                    <h3 className="temp">{temp}ºC </h3>
                    {/* <h2 className="modal-textforcast">{weather?.main}</h2> */}
                    <h2 className="modal-textforcast">{city} </h2>
                    <button
                      className="weatherButton"
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
