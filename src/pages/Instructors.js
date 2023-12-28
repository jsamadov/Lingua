import React from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Copyright from "../footer/copyright";
import Footer from "../footer/footer";

 function Instructors(){
return(
    <>
    <Header />
    <Navbar />
    <div style={{backgroundColor:"purple",height:"20vh"}}>
        Video 
    </div>
    <Footer />
    <Copyright />
    </>
)
}

export default Instructors;