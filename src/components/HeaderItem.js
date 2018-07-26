import React, { Component } from 'react';
class HeaderItem extends Component {
	render() {
		const itemClass = this.props.isActived ? 'active' : '';
		return (
            <li className={itemClass} onClick={this.props.onClick}>{this.props.name}</li>
		);
	}
}

export default HeaderItem;
