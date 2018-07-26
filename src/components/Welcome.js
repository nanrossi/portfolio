import React, { Component } from 'react';
import Header from './Header.js';
import Icon from './Icon.js';

class Welcome extends Component {
	
	buttonClick(e) {
		e.preventDefault();
		const session = document.getElementById("about");
		if (session) {
			session.scrollIntoView({ 
				behavior: 'smooth', 
				block: 'start' 
			});
		}
	}
	
  render() {
    return (
		<section id="home" className="flex">
			<div id="pt" className="canvas">
				<canvas id="canvas" className="canvas-size"></canvas>
			</div>

			<div className="flex">
				<div className="text">
				Hi, I'm <span className="highlight">Renan Rossi</span>.
				<br />
				I'm a full-stack web developer.
				</div>
				<div className="button" onClick={this.buttonClick.bind(this)}>View my work <Icon icon='arrow-right'/></div>

				<Header />
			</div>
		</section>
    );
  }
}

export default Welcome;
