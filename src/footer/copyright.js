import React from "react";
import "./copyright.css";
import { Link } from "react-router-dom";

function copyright() {
  return (
    <div className="copyright-first">
      <div className="footer-first-div">
        <div>
          <div className="number-copyright">
            <span>
              Copyright © 2023 All rights reserved | This template is made with
              <Link to="">
                <i class="fa-regular fa-heart"></i>
              </Link>
              by
              <Link to="https://colorlib.com">Colorlib</Link>
            </span>
          </div>
        </div>
        <div>
          <div className="number-phone">
            <span>PHONE: +44 300 303 0266</span>
          </div>
        </div>
        <div className="footer-end-sheet">
          <div className="nav-end">FOLLOW US</div>
          <div className="network">
            <ul>
              <li>
                <Link to="">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default copyright;
