import React from 'react';
import Image from './image';
import Title from './title';

class Card extends React.Component  {
	constructor(props) {
		super(props);
		
		this.state = {
			iconActive: this.props.favorite,
			showCart: false
		}
	}

	setFavorite(index) {
		this.props.isFavorite(index);
		this.setState({iconActive: !this.state.iconActive});
	}

	async changeViewCart() {
		await this.setState({ showCart: !this.state.showCart });
	}

	newcartInfo() {
		return (
			<div className='cart-info'>
				<p>hola</p>
			</div>
		);
	}

	newcart() {
		return (
			<div className='cart'>
				<Title 
					showCart={() => this.changeViewCart()} 
					title={this.props.title} 
					className="title">
				</Title>
				<button
					className={this.state.iconActive ? 'cart__favorite cart__favorite--active' : 'cart__favorite'} 
					onClick={()=>this.setFavorite(this.props.id)}>
				</button>
				<Image url={this.props.img} className="image"></Image>
			</div>
		);
	}

	render() {
		let component = null;

		if (this.state.showCart === true) {
			component =  this.newcartInfo();
		} else {
			component = this.newcart();
		}
		return (
			component
		)
	}
}

export default Card;