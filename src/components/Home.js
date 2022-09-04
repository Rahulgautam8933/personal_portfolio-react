import React from "react";
import Typewriter from "typewriter-effect";
// import { Typewriter } from 'react-simple-typewriter'

export default function Home() {


  return (
    <section id="sec1">
      <div className="aboutme">
        <div id="card">
          <div className="card1">
            <div className="img">
              <img src="./img/profile.jpeg" alt="" />
            </div>
            <div className="name">
              <h1>RAHUL</h1>
              <h1>GAUTAM</h1>
            </div>
            <div className="contactlogo">
              <ul>
                <li>
                  <a href="https://github.com/Rahulgautam8933">
                    <img
                      src="./img/github.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rahul-gautam-3113091bb/">
                    {" "}
                    <img
                      src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_31,h_31,al_c,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/RahulGa08669551">
                    <img
                      src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_31,h_31,al_c,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png"
                      alt=""
                    />{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    {" "}
                    <img
                      src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="homecard2">
            <div className="homebox1">
              <h1>Hello!</h1>
              <h3>I`m <span><Typewriter 
                onInit={(typewriter)=>{
                  typewriter
                  .typeString("Rahul gautam")
                  // .callFunction()
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .deleteAll()
                  .typeString("Web developer")
                  .deleteAll()
                  .typeString("Java programmer")
                  .deleteAll()
                  .typeString("Rahul gautam")
                  .start();
                }} /></span></h3>
                  
              </div>
            <div className="cvbox">
              <button><a href="./resume.pdf" target={"_blank"}>CV</a></button>
              <button><a href="#contactheading"> Get in touch</a></button>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
