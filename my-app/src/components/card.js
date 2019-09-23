import React from 'react';
import Image from './image';
import Title from './title';
import Paragraph from './paragraph';

class Card extends React.Component {
	render() {
		return (
			<div>
				<Image url={this.props.img} className="image"></Image>
				<Title title={this.props.title} className="title"></Title>
				<Paragraph paragraph={this.props.paragraph} className="paragraph"></Paragraph>
			</div>
		)
	}
}

export default Card;