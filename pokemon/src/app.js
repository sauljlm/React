import React from 'react';
import Card from './components/card';
import CardInfo from './components/cardInfo';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showFavorites: false,
			showCart: false,
			data: JSON.parse(localStorage.getItem('data')),
			cardSelected: 0
		}
		this.favorites = [];
	}

	changeFavorite(id) {
		let same = false;
		this.favorites.map((element, index) => {
			if (element.id === id) {
				this.favorites.splice(index, 1)
				same = true;
			}
		});

		this.state.data.cards.map(card => {
			if(card.id === id && same === false) {
				this.favorites.push(card);
			}
		});
	}

	btnAction() {
		this.setState({showFavorites : !this.state.showFavorites});
	}

	async changeViewCart(id) {
		await this.setState({ showCart: !this.state.showCart });
		this.setState({cardSelected: id});
	}

	getElements() {
		let cards = [];
		if (this.state.showFavorites) {
			this.favorites.map((element) => {
				this.newCard(element, cards)
			});
		} else {
			this.state.data.cards.map((element) => {
				this.newCard(element, cards)
			});
		}

		return cards;
	}

	getCardSelected() {
		let cardSelected = this.state.data.cards.filter(card => card.id === this.state.cardSelected );
		return cardSelected;
	}

	newCard(element, cards) {
		cards.push(
			<Card
			showCart={this.changeViewCart.bind(this)} 
			isFavorite={this.changeFavorite.bind(this)}
			key={element.id}
			id ={element.id}

			img={element.imageUrl} 
			title={element.name}/>
		);
	}

	newCardInfo() {
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

	render() {
		let component = null;

		if(this.state.showCart) {
			component = this.newCardInfo();
		} else {
			component =  this.getElements();
		}

		return (
			<div className="countain">
				<h1>Pokemon</h1>
				<button onClick={this.btnAction.bind(this)} className="btn-show">favorites</button>
				<div className={this.state.showCart ? 'count-cart' : 'count-carts'} >{component}</div>
			</div>
		);
	}
}

export default App;
