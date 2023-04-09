import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
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
      <ThemeToggle />
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
