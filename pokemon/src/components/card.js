import React from 'react';
import Image from './image';
import Title from './title';

import { Link } from 'react-router-dom';

function Card(props) {
	return (
		<Link className='cart' to={`/cardInfo`}>
			<Title title={props.title} className="title" />
			<Image url={props.img} className="image" />
		</Link>
	);
}

export default Card;