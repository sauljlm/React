import React from 'react';
import Image from './image';
import Title from './title';

class Card extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {
			iconActive: this.props.favorite
		}
	}

	setFavorite(id) {
		this.props.isFavorite(id);
		this.setState({iconActive: !this.state.iconActive});
	}

	render() {
		return (
			<div className='cart'>
				<Title title={this.props.title} className="title" />
				<button
					className={this.state.iconActive ? 'cart__favorite cart__favorite--active' : 'cart__favorite'} 
					onClick={()=>this.setFavorite(this.props.id)} />
				<Image showCart={this.props.showCart.bind(this)} id={this.props.id} url={this.props.img} className="image" />
			</div>
		);
	}
}

export default Card;