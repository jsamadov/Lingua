import React from "react";
import "./tutors.css";
import { Link } from "react-router-dom";
import instructor_1 from "../images/main/instructor_1.jpg";
import instructors_backg from "../images/main/instructors_backg.png";
import instructor_2 from "../images/main/instructor_2.jpg";
import instructor_3 from "../images/main/instructor_3.jpg";

function tutors() {
  return (
    <>
      <div className="tutors-best">
        <span>The Best Tutors in Town</span>
      </div>
      <div className="tutors-main">
        <div className="tutors-main-item">
          <div className="tutors-first">
            <img src={instructor_1} />
          </div>
          <div className="tutors-second">
            <h3>Sarah Parker</h3>
            <p>Teacher</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              enim nulla, mollis eu metus in, sagittis fringilla tortor.
            </p>
          </div>
          <div className="network-tutors">
            <ul>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="tutors-main-item">
          <div className="tutors-first">
            <img src={instructor_2} />
          </div>
          <div className="tutors-second">
            <h3>Sarah Parker</h3>
            <p>Teacher</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              enim nulla, mollis eu metus in, sagittis fringilla tortor.
            </p>
          </div>
          <div className="network-tutors">
            <ul>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="tutors-main-item">
          <div className="tutors-first">
            <img src={instructor_3} />
          </div>
          <div className="tutors-second">
            <h3>Sarah Parker</h3>
            <p>Teacher</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              enim nulla, mollis eu metus in, sagittis fringilla tortor.
            </p>
          </div>
          <div className="network-tutors">
            <ul>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link className="myIcon" to="">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default tutors;
