import React from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Copyright from "../footer/copyright";
import Footer from "../footer/footer";
import Main from "../main/main";
import Tutors from "../main/tutors";
import Slider from "../pages/slider";
import Form from "../pages/form";
import { Link } from "react-router-dom";
import "../pages/Home.css";
import course_1 from "../images/main/course_1.jpg";
import course_2 from "../images/main/course_2.jpg";
import course_3 from "../images/main/course_3.jpg";
import event1 from "../images/main/event_1.jpg";
import event2 from "../images/main/event_2.jpg";
import event3 from "../images/main/event_3.jpg";
import blog_1 from "../images/main/blog_1.jpg";
import blog_2 from "../images/main/blog_2.jpg";
import blog_3 from "../images/main/blog_3.jpg";
import blog_4 from "../images/main/blog_4.jpg";
import blog_5 from "../images/main/blog_5.jpg";
import blog_6 from "../images/main/blog_6.jpg";
import blog_7 from "../images/main/blog_7.jpg";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Slider />
      <div className="home-h2">
        <h2>Popular Online Courses</h2>
      </div>
      <div className="start-item">
        <div className="item-first">
          <div className="item-main">
            <div className="item-main-first">
              <img src={course_1} />
            </div>
            <div className="item-main-second">
              <h1>Vocabulary</h1>
              <div className="item-p">
                <ul>
                  <li>Sarah Parker</li>
                  <li>English</li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim nulla.
              </p>
            </div>
            <div className="item-main-third">
              <div>
                <Link className="user-i" to="">
                  <i class="fa-solid fa-user"></i>
                </Link>
                <span>10</span>
              </div>
              <button>Free</button>
              <div>
                <Link className="user-i" to="">
                  <i class="fa-solid fa-star"></i>
                </Link>
                <span>4,5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-first">
          <div className="item-main">
            <div className="item-main-first">
              <img src={course_2} />
            </div>
            <div className="item-main-second">
              <h1>Vocabulary</h1>
              <div className="item-p">
                <ul>
                  <li>Sarah Parker</li>
                  <li>English</li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim nulla.
              </p>
            </div>
            <div className="item-main-third">
              <div>
                <Link className="user-i" to="">
                  <i class="fa-solid fa-user"></i>
                </Link>
                <span>10</span>
              </div>
              <button>Free</button>
              <div>
                <Link className="user-i" to="">
                  <i class="fa-solid fa-star"></i>
                </Link>
                <span>4,5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-first">
          <div className="item-main">
            <div className="item-main-first">
              <img src={course_3} />
            </div>
            <div className="item-main-second">
              <h1>Vocabulary</h1>
              <div className="item-p">
                <ul>
                  <li>Sarah Parker</li>
                  <li>English</li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim nulla.
              </p>
            </div>
            <div className="item-main-third">
              <div>
                <Link className="user-i" to="">
                  <i class="fa-solid fa-user"></i>
                </Link>
                <span>10</span>
              </div>
              <div className="yellow-button">
                <button>$45</button>
              </div>
              <div>
                <Link className="user-i" to="">
                  <i class="fa-solid fa-star"></i>
                </Link>
                <span>4,5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tutors />
      <Form />
      <div className="upcoming">
        <div className="upcomingEvent">
          <h2>Upcoming Events</h2>
        </div>
        <div className="eventFirst">
          <div className="eventImg">
            <img src={event1} />
            <div className="eventItem">
              <Link>Networking Day</Link>
              <button>Free</button>
            </div>
          </div>
          <div className="eventImg">
            <img src={event2} />
            <div className="eventItem">
              <Link>Networking Day</Link>
              <button>Free</button>
            </div>
          </div>
          <div className="eventImg">
            <img src={event3} />
            <div className="eventItem">
              <Link>Networking Day</Link>
              <button>Free</button>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-main">
        <div className="blog-nav">
          <div className="blog-double">
            <div className="blog-first">
              <div className="blog-title">
                <div className="blog-title-from">From Our Blog</div>
                <div>
                  <p className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor.
                  </p>
                </div>
                <div className="blog-container-img">
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
                {/* <div>
                    <img src={blog_2} />
                  </div>
                  <div>
                    <img src={blog_3} />
                  </div>
                  <div>
                    <img src={blog_4} />
                  </div>
                  <div>
                    <img src={blog_5} />
                  </div>
                  <div>
                    <img src={blog_6} />
                  </div> */}
              </div>
            </div>

            <div className="blog-second">
              <div className="blog-bg">
                <img src={blog_7} />
                {/* <div className="bg-title">Design Better Forms</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
}
export default Home;
