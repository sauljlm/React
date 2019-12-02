import React from 'react';
import Image from './image';
import Title from './title';
import Paragraph from './paragraph';

export default function Card(props) {
	return (
		<div className="count-cart">
			<Image url={props.episode.img} className="image" />
			<div className="cont-card-head">
				<Title title={props.episode.name} className="title" />
				<button
					onClick={()=> props.changeFavorite(props.index)}
					className="card__btn"
				>
					<img 
						src={props.episode.favorite ? "./static/starActive.png" : "./static/star.png"}
						alt=""
					/>
				</button>
			</div>
			<Paragraph text={props.episode.text} className="paragraph" />
		</div>
	);
}
