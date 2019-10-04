import React from 'react';
import Image from './image';
import Title from './title';
import Paragraph from './paragraph';

class Card extends React.Component  {
	constructor(props) {
		super(props);
		
		this.state = {
			favorite: this.props.isFavorite,
			iconActive: this.props.favorite 
		}
	}

	setFavorite(index) {
		this.state.favorite(index);
		this.setState({iconActive: !this.props.iconActive});
	}

	render() {
		return (
			<div className='episode'>
				<Image url={this.props.img} className="image"></Image>
				<Title title={this.props.title} className="title"></Title>
				<Paragraph paragraph={this.props.paragraph} className="paragraph"></Paragraph>
				<button className={this.props.iconActive ? 'episode__favorite episode__favorite--active' : 'episode__favorite'} onClick={()=>this.setFavorite(this.props.id)}></button>
			</div>
		)
	}
}

export default Card;