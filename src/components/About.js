import React, { Component } from 'react';
import Me from "../img/me.jpg";

class About extends Component {
  clickSpan() {
    const session = document.getElementById("contact");
    if (session) {
        session.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
  }

  render() {
    return (
    <section id="about">
        <div className="container flex">
            <div className="header">ABOUT</div>
            <div className="header-bar"></div>

            <div className="flex row-gt-sm">
                <div className="flex flex-50-gt-sm">
                    <img src={Me} alt="Me" className="me" />
                    <div className="label bold">Who's this guy?</div>
                </div>

                <div className="flex flex-50-gt-sm">
                    <div className="description">
                        I'm a Full-stack Developer for <a className="highlight" href="https://www.dextra.com.br/">Dextra</a>.
                        <br />
                        I have serious passion for programming, technology and making things that make a difference in the world.
                        <br />
                        <span className="highlight clickable" onClick={this.clickSpan.bind(this)}>Let's make something special.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default About;
