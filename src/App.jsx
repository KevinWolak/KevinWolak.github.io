import { useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./NavBar/Navbar";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
