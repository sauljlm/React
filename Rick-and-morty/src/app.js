import React from 'react';
import Card from './components/card';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: this.getData(),
			showFavorites: false
		}
	}

	getData() {
		const data = JSON.parse(localStorage.getItem('data'));
		const newArray = []
		
		data.forEach((element) => {
			if (element.image) {
				const episode = {}
				episode.id = element.id;
				episode.name = element.name;
				episode.text = element.summary;
				episode.img = element.image.medium;
				episode.favorite = false;

				newArray.push(episode);
			}
		});

		return newArray;
	}

	setView() {
		this.setState({
			showFavorites: !this.state.showFavorites
		});
	}

	changeFavorite(index) {
		this.setState(() => {
			this.state.data[index].favorite = !this.state.data[index].favorite
		});
	}

	render() {
		return(
			<div className="contain">
				<h1>Rick And Morty</h1>
				<button 
					onClick={() => this.setView()}
					className="btn-show"
				>{this.state.showFavorites ? "Show all" : "Show Favorites"}</button>
				<div className="count-carts">
					{
						this.state.data.map((element, index) => {
							if (this.state.showFavorites) {
								if (element.favorite) {
									return (
										<Card 
											episode={element}
											changeFavorite={this.changeFavorite.bind(this)}
											index={index}
										/>
									)
								}
							} else {
								return (
									<Card 
										episode={element}
										changeFavorite={this.changeFavorite.bind(this)}
										index={index}
									/>
								)
							}
						})
					}
				</div>
			</div>
		)
	}
}
