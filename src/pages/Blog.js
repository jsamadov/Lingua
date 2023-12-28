import React from "react";
import "./Blog.css";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";
import Copyright from "../footer/copyright";
import blog_1 from "../images/main/blog_1.jpg";
import blog_2 from "../images/main/blog_2.jpg";
import blog_3 from "../images/main/blog_3.jpg";
import blog_4 from "../images/main/blog_4.jpg";
import blog_5 from "../images/main/blog_5.jpg";
import blog_6 from "../images/main/blog_6.jpg";
import blog_7 from "../images/main/blog_7.jpg";

function Blog() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="blog-main">
        <div className="main-items">
          <div className="main-tittle">Welcome to our blog!</div>
          <div className="main-img">
            <div className="blog-img-wrapper">
              <img src={blog_1} alt="Blog 1" />
              <div className="overlayDiv">
                <p>TRAVEL</p>
              </div>
            </div>
            <div className="blog-img-wrapper">
              <img src={blog_2} alt="Blog 1" />
              <div className="overlayDiv">
                <p>LANGUAGES</p>
              </div>
            </div>
            <div className="blog-img-wrapper">
              <img src={blog_3} alt="Blog 1" />
              <div className="overlayDiv">
                <p>CULTURES</p>
              </div>
            </div>
            <div className="blog-img-wrapper">
              <img src={blog_4} alt="Blog 1" />
              <div className="overlayDiv">
                <p>FASHION</p>
              </div>
            </div>
            <div className="blog-img-wrapper">
              <img src={blog_5} alt="Blog 1" />
              <div className="overlayDiv">
                <p>COOKING</p>
              </div>
            </div>
            <div className="blog-img-wrapper">
              <img src={blog_6} alt="Blog 1" />
              <div className="overlayDiv">
                <p>HOBBIES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loadButton">
        <button>LOAD MORE</button>
      </div>

      <Footer />
      <Copyright />
    </>
  );
}

export default Blog;
