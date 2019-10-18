import React from 'react';
import Image from './image';
import Title from './title';
import Paragraph from './paragraph';
import Attacks from './attacks';

class CardInfo extends React.Component  {
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
		const attacksData = this.props.attacks;
		let attacks = [];

		if(attacksData) {
			attacksData.map((element, index) => {
				attacks.push(
					<Attacks
					key={`attack-${index}`}
					name={element.name}
					damage={element.damage}
					text={element.text}/>
				);
			});
		}

		return (
			<div className='cart-info'>
				<div className='left-column'>
					<Image url={this.props.img} className="left-column__image" />
				</div>
				<div className='right-column'>
					<button className="close-card-info" onClick={()=>this.props.showCart()}>close</button>
					<Title title={this.props.title} className="left-column__title" />
          <Paragraph text={this.props.subType} className="left-column__subType" />
          <div >{attacks}</div>
          <Paragraph text={this.props.rarity} className="left-column__rarity" />
				</div>
			</div>
		);
	}
}

export default CardInfo;