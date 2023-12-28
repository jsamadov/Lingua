import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./font/font.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Instructors" element={<Instructors />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}
