import React from 'react';
import Image from './image';
import Title from './title';

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
		this.setState({iconActive: !this.state.iconActive});
	}

	render() {
		return (
			<div className='episode'>
				<Title title={this.props.title} className="title"></Title>
				<button
					className={this.state.iconActive ? 'episode__favorite episode__favorite--active' : 'episode__favorite'} 
					onClick={()=>this.setFavorite(this.props.id)}>
				</button>
				<Image url={this.props.img} className="image"></Image>
			</div>
		)
	}
}

export default Card;