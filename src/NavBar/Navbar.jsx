import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <nav id="nav">
      <ul>
        <CustomLink className="home" to="/">
          <FaReact /> Home
        </CustomLink>
        <CustomLink to="/about">About me</CustomLink>
        <CustomLink to="/project"> Projects </CustomLink>
        <CustomLink to="/contact"> Contact </CustomLink>
      </ul>
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      ></button>
    </nav>
  );
};

export default Navbar;

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
