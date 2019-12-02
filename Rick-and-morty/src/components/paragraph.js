import React from 'react';

export default function Paragraph(props) {

	const text = props.text.replace(/(<([^>]+)>)/ig,"");

	return (
		<p className={props.className}>{text}</p>
	);
}
