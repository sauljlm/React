import React from 'react';
import Card from '../components/card';

class AllCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(localStorage.getItem('data')),
		}
	}

	newCard(element, cards) {
		cards.push(
			<Card
        key={element.id}
        id ={element.id}

        img={element.imageUrl} 
        title={element.name}
      />
		);
	}

	getElements() {
		let cards = [];
    this.state.data.cards.map((element) => {
      this.newCard(element, cards)
    });

		return cards;
  }
  
	render() {
		const component =  this.getElements();

		return (
			<div className="countain">{component}</div>
		);
	}
}

export default AllCards;