import React from 'react';
import CardInfo from '../components/cardInfo';

function Card(props) {
	let card = props.location.cardData;
		
	let component = (
		<CardInfo
			key={card.id}
			id ={card.id}
	
			img={card.imageUrl} 
			title={card.name}
			rarity={card.rarity}
			subType={`${card.supertype}-${card.subtype}`}
			attacks={card.attacks}
		/>
	)

	return (
		<div className="contain count-cart">
			{component}
		</div>
	)
}

export default Card;