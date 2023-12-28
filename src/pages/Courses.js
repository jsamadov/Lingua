import React from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Copyright from "../footer/copyright";
import Footer from "../footer/footer";
import Vocabulary from "../vocabulary/vocabulary";
import { Link } from "react-router-dom";
import "../pages/Courses.css";
import Slider from "../pages/slider";

function Courses() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="courses-div">
        <div className="courses-div-first">
          <Link className="myLink" to="/">
            HOME
          </Link>
          <Link className="myLink" to="/">
            Courses
          </Link>
        </div>
        <div className="courses-div-second">English</div>
      </div>
      <div className="learnLang">Learn Languages Easily</div>
      <Slider />
      <Vocabulary />
      <div className="loadButton">
        <button>LOAD MORE</button>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default Courses;
