import React from 'react';

class CardInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showCart: false,
			data: JSON.parse(localStorage.getItem('data')),
			cardSelected: 0
		}
		this.favorites = [];
	}

	getCardSelected() {
		let cardSelected = this.state.data.cards.filter(card => card.id === this.state.cardSelected );
		return cardSelected;
	}

	render() {
		const card = this.getCardSelected();
		
		if(card.length) {
			var component = (
				<CardInfo
          showCart={this.changeViewCart.bind(this)} 
          isFavorite={this.changeFavorite.bind(this)}
          key={card[0].id}
          id ={card[0].id}
      
          img={card[0].imageUrl} 
          title={card[0].name}
          rarity={card[0].rarity}
          subType={`${card[0].supertype}-${card[0].subtype}`}
          attacks={card[0].attacks}
				/>
			)
		}

		return ( 
			component
		)
	}
}

export default CardInfo;