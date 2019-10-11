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

	setFavorite(index) {
		this.props.isFavorite(index);
		this.setState({iconActive: !this.state.iconActive});
	}

	newcartInfo() {
		return (
			<div className='cart-info'>
				<div className='left-column'>
					<Image url={this.props.img} className="image" />
				</div>
				<div className='right-column'>
					<Title title={this.props.title} className="title" />
				</div>
			</div>
		);
	}

	newcart() {
		return (
			<div onClick={() => this.props.showCart()}  className='cart'>
				<Title 
					title={this.props.title} 
					className="title" />
				<button
					className={this.state.iconActive ? 'cart__favorite cart__favorite--active' : 'cart__favorite'} 
					onClick={()=>this.setFavorite(this.props.id)} />
				<Image url={this.props.img} className="image" />
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