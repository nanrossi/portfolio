import React, { Component } from 'react';
import HeaderItem from './HeaderItem.js';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fixed: false,
			itens: [
				{
					name: "home",
					isActived: true
				},
				{
					name: "about",
					isActived: false
				},
				{
					name: "skills",
					isActived: false
				},
				{
					name: "portfolio",
					isActived: false
				},
				{
					name: "contact",
					isActived: false
				},
			]
		}

		this.handleScroll = this.handleScroll.bind(this);
		this.activeMenuItem = this.activeMenuItem.bind(this);
		this.getActivedItemName = this.getActivedItemName.bind(this);
	}

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		const currentScrollTop = window.scrollY;
		
		const AboutSession = 620;
		const SkillsSession = 1308;
		const ProjectsSession = 1995;
		const ContactSession = 2680;

		if (!this.state.fixed && currentScrollTop > AboutSession) {
			this.setState({ fixed: true });
		} else if(this.state.fixed && currentScrollTop < AboutSession) {
			this.setState({ fixed: false });
		}

		if (currentScrollTop < AboutSession && 
			this.getActivedItemName() !== 'home'
		) {
			this.activeMenuItem('home');
		} else if (currentScrollTop > AboutSession && 
			currentScrollTop < SkillsSession && 
			this.getActivedItemName() !== 'about'
		) {
			this.activeMenuItem('about');
		} else if (currentScrollTop > SkillsSession && 
			currentScrollTop < ProjectsSession && 
			this.getActivedItemName() !== 'skills'
		) {
			this.activeMenuItem('skills');
		} else if (currentScrollTop > ProjectsSession && 
			currentScrollTop < ContactSession && 
			this.getActivedItemName() !== 'portfolio'
		) {
			this.activeMenuItem('portfolio');
		} else if (currentScrollTop > ContactSession && 
			this.getActivedItemName() !== 'contact'
		) {
			this.activeMenuItem('contact');
		}
	}

	getActivedItemName() {
		return this.state.itens.find(i => i.isActived).name;
	}

	activeMenuItem(itemName) {
		this.setState(this.state.itens.map(i => {
			if (i.name === itemName) {
				i.isActived = true;
			} else {
				i.isActived = false;
			}
			return i;
		}));
	}

	clickMenuItem(itemName) {
		this.activeMenuItem(itemName);
		
		const session = document.getElementById(itemName);
		if (session) {
			session.scrollIntoView({ 
				behavior: 'smooth', 
				block: 'start' 
			});
		}
	}

	render() {
		const navClass = "flex" + (this.state.fixed ? " fixed" : "");
		return (
			<nav className={navClass}>
				<ul className="link-wrap">
					{this.state.itens.map((item,i) =>
						<HeaderItem 
							key={i} 
							name={item.name} 
							isActived={item.isActived} 
							onClick={this.clickMenuItem.bind(this, item.name)} 
						/>
					)}
				</ul>
				<i className="mdi mdi-menu"></i>
			</nav>
		);
	}
}

export default Header;
