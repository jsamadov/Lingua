import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

function header() {
    return (
        <div className="header-first">
            <div className="header-first-div">
                <div>
                    <div className="number"><span>PHONE: +44 300 303 0266</span>
                    </div>
                    <div className="language">
                        <p>SITE LANGUAGE:</p>
                        <select class="custom-select">
                            <option selected>English</option>
                            <option value="1">Ukrainian</option>
                            <option value="2">Japanese</option>
                            <option value="3">Lithuanian</option>
                            <option value="4">Swedish</option>
                            <option value="5">Italian</option>
                        </select>
                    </div>
                </div>
                <div className="nav-end">
                    FOLLOW US
                </div>
                <div className="network">
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
    )
}
export default header;