import React from 'react'

export default function About() {
  return (
    <>
    <div id="aboutheading">
    <h1>About</h1>
    </div>
    
    <div className="aboutsec">
      <div className="box1">
        <div className="aboutpic">
          <img src="./img/profile.jpeg" alt="" />
        </div>
       
      </div>
      <div className="box2">
        <p>Myself Rahul gautam, Final-year B-Tech student at Institute of Engineering and Rural Technology (IERT) Prayagraj and Motivated programmer with background in "Web Technologies".
Expertise includes HTML, CSS, JavaScript and Core-Java.  <br /><br /><h6>Contact:-</h6>+91 9005286625 <br />Rahulgautam8933@gmail.com <br /><div className="aboutmycv"><a href="./resume.pdf" target={"_blank"}>Download cv</a></div></p>

      </div>
    </div>
    </>
  )
}
