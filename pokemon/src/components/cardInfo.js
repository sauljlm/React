import React from 'react';
import Image from './image';
import Title from './title';
import Paragraph from './paragraph';
import Attacks from './attacks';

import { Link } from 'react-router-dom';


function CardInfo(props) {

	const attacksData = props.attacks;
		let attacks = [];

	if(attacksData) {
		attacks.push(<Paragraph text={"Attacks"} className="attaks__title" />);
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
				<Image url={props.img} className="left-column__image" />
			</div>
			<div className='right-column'>
				<Link className="close-card-info" to={`/`}>close</Link>
				<Title title={props.title} className="left-column__title" />
				<Paragraph text={props.subType} className="left-column__subType" />
				<Paragraph text={props.rarity} className="left-column__rarity" />
				<div className="attacks">{attacks}</div>
			</div>
		</div>
	)
}

export default CardInfo;