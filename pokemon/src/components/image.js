import React from 'react';

function Image(props) {
	return (
		<img onClick={() => props.showCart(props.id)}  className="image" src={props.url} alt=""/>
	);
}

export default Image;
