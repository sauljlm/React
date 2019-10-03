import React from 'react';
import Image from './image';
import Title from './title';
import Paragraph from './paragraph';
import './card.css';

class Card extends React.Component  {
	constructor(props) {
		super(props);
		
		this.state = {
			favorite: this.props.isFavorite
		}

	}

	setFavorite(index) {
		this.state.favorite(index);
	}

	render() {
		return (
			<div className='episode'>
				<Image url={this.props.img} className="image"></Image>
				<Title title={this.props.title} className="title"></Title>
				<Paragraph paragraph={this.props.paragraph} className="paragraph"></Paragraph>
				<button className={`episode__favorite`} onClick={()=>this.setFavorite(this.props.id)}></button>
			</div>
		)
	}
}

export default Card;