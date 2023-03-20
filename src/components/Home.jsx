import React from "react";
import "../App.css";
import nerdImage from "../img/nerdcutout.png";
import { useQuery } from "@tanstack/react-query";
import fetchWeather from "../hooks/fetchWeather";
import { useParams } from "react-router-dom";
import "./Home.css";

const Discription = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchWeather);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.weather[0];
  return (
    <div className="App">
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
      </section>
      <h2>{pet.main}</h2>
    </div>
  );
};

export default Discription;
