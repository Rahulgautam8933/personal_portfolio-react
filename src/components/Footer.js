import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="navbox1">
        <div className="navitems">
          <a href="#sec1">Home</a>
          <a href="#aboutheading">About</a>
          <a href="#skillheading">Skills</a>
          <a href="#sec2">Projects</a>
          <a href="#contactheading">contact</a>
        </div>
        <div className="mycontact">
          <h5>Contact:-</h5>
          <span>Gmail: Rahulgautam8933@gmail.com</span>
          <span>Mobile no: +91 9005286625</span>

        </div>
      </div>
      <div className="navbox2">
        <div className="logoimg">
          <img src="./img/github.png" alt="Github" />
          <img src="./img/linkden.png" alt="linkdin " />
          <img src="./img/hakerrank.png" alt="haker rank" />
          <img src="./img/hakerrank.png" alt="intrenshala" />
        </div>
        <div className="cvbutton">
          <a href="./resume.pdf" target={"_blank"}>Download my CV</a>
        </div>
      </div>
    </div>
  );
}
