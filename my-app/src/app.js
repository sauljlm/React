import React from 'react';
import Card from './components/card';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: false,
			data: JSON.parse(localStorage.getItem('data')),
			DATA: []
		}
	}

	changeFavorite(index) {
		this.setState(() => {
			this.state.DATA[index].favorite = !this.state.DATA[index].favorite
			console.log(this.state.DATA);
		});
	}

	btnAction() {
		this.setState(state => (
			this.state.view = !this.state.view
		));
		this.render();
	}

	emptyData() {
		this.setState({DATA: []});
	}

	newEpisode(myObject, element, index) {
		this.emptyData.bind(this);
		myObject = {id: index, favorite: false, img: element.image.medium, title: element.name, text: element.summary};
		this.state.DATA.push(myObject);
	}

	newCard(cards, index) {
		cards.push(
			<Card
			isFavorite={this.changeFavorite.bind(this)} 
			key={this.state.DATA[index].id} 
			id ={this.state.DATA[index].id} 
			
			img={this.state.DATA[index].img} 
			title={this.state.DATA[index].title} 
			paragraph={this.state.DATA[index].text}/>
		);
	}

	getElements() {
		let cards = [];
		let myObject = {};
		this.state.data._embedded.episodes.forEach((element, index) => {
			this.newEpisode(myObject, element, index)

			if (this.state.view) {
				if (element.favorite) {
					console.log(this.state.DATA);
					this.newCard(cards, index)
				}
			} else {
				this.newCard(cards, index)
			}
		});

		return cards;
	}
	
	render() {
		const cards = this.getElements();

		return (
			<div className="countain">
				<h1>{this.state.data.name}</h1>
				<p>{this.state.data.summary}</p>
				<button onClick={this.btnAction.bind(this)} className="btn-show">favorites</button>
				<div className="count">{cards}</div>
			</div>
		);
	}
}

export default App;
