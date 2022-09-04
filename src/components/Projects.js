import React from 'react'

export default function Projects() {
  return (
    <section id="sec2" >
        <div className="heading"> <h1>PROJECTS</h1></div>
        <div id="project" >
            <div className="container ">
                <div className="row featurette d-flex justify-content-center align-items-center boxmargin proitem">
                    <div className="col-md-7 order-md-1">
                        <h2 className="featurette-heading">DRS System  <span className="text-muted">Using Python</span></h2>
                        {/* <p className="lead">About Drs system</p> */}
                    </div>
                    <div className="col-md-5 order-md-2">
                        <div className="proimg">
                            <img src="./img/DRS.png" alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="row featurette d-flex justify-content-center align-items-center boxmargin proitem">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Video Chating App <span className="text-muted">Using HTML, CSS and Javascript</span></h2>
                        {/* <p className="lead">About video chating app</p> */}
                    </div>
                    <div className="col-md-5 order-md-1">
                        <div className="proimg">
                            <img src="./img/project1.png" alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="row featurette d-flex justify-content-center align-items-center boxmargin proitem">
                    <div className="col-md-7 order-md-1">
                        <h2 className="featurette-heading">Food delivery website <span className="text-muted">Using HTML, CSS and Javascript</span></h2>
                        {/* <p className="lead">Some great placeholder content for the first featurette here. Imagine some
                            exciting
                            prose here.</p> */}
                    </div>
                    <div className="col-md-5 order-md-2">
                        <div className="proimg">
                            <img src="./img/project2.png" alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="row featurette d-flex justify-content-center align-items-center boxmargin proitem">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">TextEditor <span className="text-muted">Using react</span></h2>
                        {/* <p className="lead">About text TextEditor</p> */}
                    </div>
                    <div className="col-md-5 order-md-1">
                        <div className="proimg">
                            <img src="./img/text.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}
