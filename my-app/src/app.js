import React from 'react';
import Card from './components/card';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: JSON.parse(localStorage.getItem('data')),
		}
	}

	render() {
		let card = (
			this.state.data.map(element => {
				console.log(element)
				return ( 
					<Card 
						img={element.image.medium} 
						title={element.name}
						paragraph={element.summary}
						className='card col-sm-12 col-md-4'
					/>
				)
			})
		)
		return(
			card
		)
	}
}

export default App;