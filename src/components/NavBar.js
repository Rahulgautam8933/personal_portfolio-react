import React from 'react'

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
    <div className="container-fluid">
      <a className="navbar-brand  " id='myHeading' href="#sec1">{props.name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link active  myHeading navitem" aria-current="page" href="#sec1">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active myHeading navitem" aria-current="page" href="#aboutheading">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active myHeading navitem" aria-current="page" href="#skillheading">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active  myHeading navitem" aria-current="page" href="#sec2">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active myHeading navitem" aria-current="page" href="#contactheading">Contact</a>
          </li>  

        </ul>
      </div>
    </div>
  </nav>
  )
}
