import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="header-second">
          <div className="header-second-div">
            <div>
              <div className="logo">
                <Link className="logo links" to="/">
                  Lingua
                </Link>
              </div>
            </div>
            <div className={`navs ${isMenuOpen ? "navs-open" : ""}`}>
              <Link className="links" to="/">
                Home
              </Link>
              <Link className="links" to="/Courses">
                Courses
              </Link>
              <Link className="links" to="/Instructors">
                Instructors
              </Link>
              <Link className="links" to="/Events">
                Events
              </Link>
              <Link className="links" to="/Blog">
                Blog
              </Link>
              <Link className="links" to="/Contact">
                Contact
              </Link>
            </div>
            <div className="form">
              <div class="input-container">
                <input
                  placeholder="Search something..."
                  class="input"
                  name="text"
                  type="text"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect fill="white"></rect>{" "}
                    <path
                      d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>{" "}
                  </g>
                </svg>
              </div>

              <Link className="user-i" to="">
                <i className="fa-solid fa-user"></i>
              </Link>

              <label class="hamburger">
                <input type="checkbox" />
                <svg viewBox="0 0 32 32">
                  <path
                    class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
            <div className="burger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="navs">
              <Link className="links" to="/">
                Home
              </Link>
              <Link className="links" to="/Courses">
                Courses
              </Link>
              <Link className="links" to="/Instructors">
                Instructors
              </Link>
              <Link className="links" to="/Events">
                Events
              </Link>
              <Link className="links" to="/Blog">
                Blog
              </Link>
              <Link className="links" to="/Contact">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
