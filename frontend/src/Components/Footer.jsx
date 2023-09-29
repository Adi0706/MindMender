import React from "react";
import mindlogo from "../Media/MindMender.png";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="logo">
          <Link to="/">
            {" "}
            <img
              src={mindlogo}
              alt="logo-footer"
              style={{ marginTop: "15px", marginLeft: "15px" }}
            ></img>{" "}
          </Link>
          <br />
          <span
            className="icons"
            style={{ marginLeft: "60px", padding: "10px",color:"black" }}
          >
            
            <a href="https://www.instagram.com/adityaxbhattacharjee/">
              <BiLogoInstagramAlt />
            </a>
            <a href="https://www.linkedin.com/in/aditya-bhattacharjee-288462215/">
            
              <BsLinkedin />
            </a>
            <a href="https://github.com/Adi0706">
            <BsGithub />
            </a>
          </span>
        </div>
        <div className="footer-content">
          <ul className="support">
            <h3><b>SUPPORT</b></h3>
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/Contact">
              {" "}
              <li>Contact Us</li>
            </Link>
            <Link to="/findyourtherapist">
              <li>Find a Therapist</li>
            </Link>
            <Link to="/About">
              <li>About Us</li>
            </Link>
          </ul>
        </div>
        <div className="card"
        style={{
            width:"500px",
            height:"auto",
            backgroundColor:"white",
        }}>
            <div className="me-card">
<h3>Happy to help you</h3>
<p>Sometimes we just need to ask a question. Simply call us between 10-4pm (Mon-Fri) and we’ll do all we can to help. </p>
<p><b>+91 9205325227</b></p>
            </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
