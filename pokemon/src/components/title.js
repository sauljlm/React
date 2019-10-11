import React from 'react';

function Title(props) {

	return (
		<button onClick={() =>props.showCart()} className={"title"} >
		{props.title}
		</button>
	);
}

export default Title;