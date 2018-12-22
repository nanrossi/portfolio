import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Back-end', 'Front-end', 'DevOps', 'Agile Methodology', 'Mobile', 'Communication','Databases'],
  datasets: [
    {
      label: 'My Skills',
      backgroundColor: 'rgba(18,207,255,0.2)',
      borderColor: 'rgba(18,207,255,0.5)',
      pointBackgroundColor: 'rgba(18,207,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(18,207,255,1)',
      data: [85, 91, 71, 87, 53, 84, 70]
    }
  ]
};

class Skills extends Component {
  render() {
    return (
    <section id="skills">
        <div className="container flex">
            <div className="header">SKILLS</div>
            <div className="header-bar-skills"></div>

            <div>
              <Radar width={400} height={400} data={data} />
            </div>
        </div>
    </section>
    );
  }
}

export default Skills;
