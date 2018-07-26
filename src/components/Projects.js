import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
    <section id="portfolio">
        <div className="container flex">
            <div className="header">PROJECTS</div>
            <div className="header-bar"></div>

            <div id="gallery" className="container flex row wrap animated">

              <div className="mix js">
                <div>
                  <div className="card" />
                  <div className="text">
                    <div className="bold">Roambi</div>
                    <span className="highlight">Pure JavaScript</span>
                  </div>
                  <div className="button" id="roambi">LEARN MORE</div>
                </div>
              </div>

              <div className="mix js">
                <div>
                  <div className="card" />
                  <div className="text">
                    <div className="bold">Roambi</div>
                    <span className="highlight">Pure JavaScript</span>
                  </div>
                  <div className="button" id="roambi">LEARN MORE</div>
                </div>
              </div>

              <div className="mix js">
                <div>
                  <div className="card" />
                  <div className="text">
                    <div className="bold">Roambi</div>
                    <span className="highlight">Pure JavaScript</span>
                  </div>
                  <div className="button" id="roambi">LEARN MORE</div>
                </div>
              </div>
              
            </div>

        </div>
    </section>
    );
  }
}

export default Projects;
