import React, { Component } from 'react';

const projects = [
  {
    id: 'kestraa',
    name: 'Kestraa',
    technology: 'Java (Spring) + React JS',
  },
  {
    id: 'sportv',
    name: 'SporTV 4K na Rússia',
    technology: 'React JS',
  },
  {
    id: 'grade',
    name: 'Grade de Programação',
    technology: 'Node.js',
  }
];


class Projects extends Component {
  render() {
    return (
    <section id="portfolio">
        <div className="container flex">
            <div className="header">PROJECTS</div>
            <div className="header-bar"></div>

            <div id="gallery" className="container flex row wrap animated">
              {
                projects.map(project => {
                  const cardStyle = `mix js ${project.id}`
                  return (
                    <div className={cardStyle}>
                      <div>
                        <div className="card" />
                        <div className="text">
                          <div className="bold">{project.name}</div>
                          <span className="highlight">{project.technology}</span>
                        </div>
                        <div className="button" id={project.id}>LEARN MORE</div>
                      </div>
                    </div>
                    )
                  })
              }
            </div>

        </div>
    </section>
    );
  }
}

export default Projects;
