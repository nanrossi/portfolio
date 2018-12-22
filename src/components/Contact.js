import React, { Component } from 'react';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import GithubImg from "../img/github.png";

class Contact extends Component {
  render() {
    return (
    <section id="contact">
        <div className="container flex">
            <div className="header">CONTACT</div>
            <div className="header-bar"></div>

            <div class="icon-wrap flex row">
              <a className="icon-box" href="https://www.linkedin.com/in/rossirenan">
                <div>
                  <LinkedinIcon color='#FFF' size={64}/>
                </div>
              </a>

              <a className="icon-box" href="mailto:nanrossi8@gmail.com">
                <div>
                  <EmailIcon color='#FFF' size={64}/>
                </div>
              </a>

              <a className="icon-box" href="https://github.com/nanrossi">
                <div>
                  <img src={GithubImg} alt="Github" />
                </div>
              </a>
            </div>
        </div>
    </section>
    );
  }
}

export default Contact;
